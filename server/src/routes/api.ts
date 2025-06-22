import express from 'express';
import { z } from 'zod';

import { query } from '../database/connection.js';

export const router = express.Router();

// Stage type definition - no more repetition!
export type Stage = 'Created' | 'In Transit' | 'Arrived at Dock' | 'Inspected' | 'Stored';

// Validation schemas using Zod
const CreateItemSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  supplier: z.string().min(1, 'Supplier is required'),
  stage: z.enum(['Created', 'In Transit', 'Arrived at Dock', 'Inspected', 'Stored']).optional(),
  expected_time: z.string().datetime('Expected time must be a valid datetime'),
});

const UpdateItemSchema = z.object({
  name: z.string().min(1).optional(),
  supplier: z.string().min(1).optional(),
  stage: z.enum(['Created', 'In Transit', 'Arrived at Dock', 'Inspected', 'Stored']).optional(),
  expected_time: z.string().datetime().optional(),
});

export type CreateItemRequest = z.infer<typeof CreateItemSchema>;
export type UpdateItemRequest = z.infer<typeof UpdateItemSchema>;

export type TrackerItem = {
  id: number;
  name: string;
  supplier: string;
  stage: Stage;
  creation_time: Date;
  expected_time: Date;
  update_time: Date;
};

export type TimelineEntry = {
  id: number;
  item_id: number;
  stage: Stage;
  entered_time: Date;
  expected_exit_time?: Date;
};

// GET /api/items - Get all items
router.get('/items', async (req, res) => {
  try {
    const result = await query('SELECT * FROM items ORDER BY creation_time DESC');
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching items:', error);
    res.status(500).json({ error: 'Failed to fetch items' });
  }
});

// GET /api/items/:id - Get item by ID with timeline
router.get('/items/:id', async (req, res) => {
  try {
    const { id } = req.params;

    // Get the item
    const itemResult = await query('SELECT * FROM items WHERE id = $1', [id]);

    if (itemResult.rows.length === 0) {
      return res.status(404).json({ error: 'Item not found' });
    }

    // Get the timeline for this item
    const timelineResult = await query(
      'SELECT * FROM item_timeline WHERE item_id = $1 ORDER BY entered_time ASC',
      [id]
    );

    const item = itemResult.rows[0];
    const timeline = timelineResult.rows;

    res.json({ ...item, timeline });
  } catch (error) {
    console.error('Error fetching item:', error);
    res.status(500).json({ error: 'Failed to fetch item' });
  }
});

// GET /api/items/:id/timeline - Get timeline for specific item
router.get('/items/:id/timeline', async (req, res) => {
  try {
    const { id } = req.params;

    const result = await query(
      'SELECT * FROM item_timeline WHERE item_id = $1 ORDER BY entered_time ASC',
      [id]
    );

    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching timeline:', error);
    res.status(500).json({ error: 'Failed to fetch timeline' });
  }
});

// POST /api/items - Create new item
router.post('/items', async (req, res) => {
  try {
    const validatedData = CreateItemSchema.parse(req.body);

    const result = await query(
      `INSERT INTO items (name, supplier, stage, expected_time) 
       VALUES ($1, $2, $3, $4) 
       RETURNING *`,
      [validatedData.name, validatedData.supplier, validatedData.stage, validatedData.expected_time]
    );

    res.status(201).json(result.rows[0]);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ error: 'Validation failed', details: error.errors });
    }
    console.error('Error creating item:', error);
    res.status(500).json({ error: 'Failed to create item' });
  }
});

// PUT /api/items/:id - Update item
router.put('/items/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const validatedData = UpdateItemSchema.parse(req.body);

    const fields = [];
    const values = [];
    let paramIndex = 1;

    Object.entries(validatedData).forEach(([key, value]) => {
      if (value !== undefined) {
        fields.push(`${key} = $${paramIndex}`);
        values.push(value);
        paramIndex++;
      }
    });

    if (fields.length === 0) {
      return res.status(400).json({ error: 'No fields to update' });
    }

    fields.push(`update_time = NOW()`);
    values.push(id);

    const result = await query(
      `UPDATE items SET ${fields.join(', ')} WHERE id = $${paramIndex} RETURNING *`,
      values
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Item not found' });
    }

    res.json(result.rows[0]);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ error: 'Validation failed', details: error.errors });
    }
    console.error('Error updating item:', error);
    res.status(500).json({ error: 'Failed to update item' });
  }
});

// DELETE /api/items/:id - Delete item
router.delete('/items/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await query('DELETE FROM items WHERE id = $1 RETURNING *', [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Item not found' });
    }

    res.json({ message: 'Item deleted successfully' });
  } catch (error) {
    console.error('Error deleting item:', error);
    res.status(500).json({ error: 'Failed to delete item' });
  }
});

// PUT /api/items/:id/stage - Update item stage (this will automatically update timeline)
router.put('/items/:id/stage', async (req, res) => {
  try {
    const { id } = req.params;
    const { stage, expected_time } = req.body;

    if (
      !stage ||
      !['Created', 'In Transit', 'Arrived at Dock', 'Inspected', 'Stored'].includes(stage)
    ) {
      return res.status(400).json({ error: 'Invalid stage' });
    }

    const fields = ['stage = $1', 'update_time = NOW()'];
    const values = [stage];
    let paramIndex = 2;

    if (expected_time) {
      fields.splice(-1, 0, `expected_time = $${paramIndex}`);
      values.push(expected_time);
      paramIndex++;
    }

    values.push(id);

    const result = await query(
      `UPDATE items SET ${fields.join(', ')} WHERE id = $${paramIndex} RETURNING *`,
      values
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Item not found' });
    }

    res.json(result.rows[0]);
  } catch (error) {
    console.error('Error updating item stage:', error);
    res.status(500).json({ error: 'Failed to update item stage' });
  }
});
