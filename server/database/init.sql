-- Create the items table for the tracker
CREATE TABLE IF NOT EXISTS items (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    supplier VARCHAR(255) NOT NULL,
    stage VARCHAR(50) NOT NULL CHECK (stage IN ('Created', 'In Transit', 'Arrived at Dock', 'Inspected', 'Stored')),
    creation_time TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    expected_time TIMESTAMP WITH TIME ZONE NOT NULL,
    update_time TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create the timeline table to track stage transitions
CREATE TABLE IF NOT EXISTS item_timeline (
    id SERIAL PRIMARY KEY,
    item_id INTEGER NOT NULL REFERENCES items(id) ON DELETE CASCADE,
    stage VARCHAR(50) NOT NULL CHECK (stage IN ('Created', 'In Transit', 'Arrived at Dock', 'Inspected', 'Stored')),
    entered_time TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    expected_exit_time TIMESTAMP WITH TIME ZONE
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_items_stage ON items(stage);
CREATE INDEX IF NOT EXISTS idx_items_creation_time ON items(creation_time);
CREATE INDEX IF NOT EXISTS idx_items_expected_time ON items(expected_time);
CREATE INDEX IF NOT EXISTS idx_timeline_item_id ON item_timeline(item_id);
CREATE INDEX IF NOT EXISTS idx_timeline_stage ON item_timeline(stage);
CREATE INDEX IF NOT EXISTS idx_timeline_entered_time ON item_timeline(entered_time);

-- Insert some sample data
INSERT INTO items (name, supplier, stage, creation_time, expected_time) VALUES
    ('Laptop Dell XPS 13', 'Dell Technologies', 'Created', NOW(), NOW() + INTERVAL '14 days'),
    ('Office Chairs (Set of 10)', 'Herman Miller', 'In Transit', NOW() - INTERVAL '2 days', NOW() + INTERVAL '7 days'),
    ('Network Switch Cisco 2960', 'Cisco Systems', 'Arrived at Dock', NOW() - INTERVAL '5 days', NOW() + INTERVAL '3 days'),
    ('Monitors LG 27"', 'LG Electronics', 'Inspected', NOW() - INTERVAL '8 days', NOW() + INTERVAL '1 day'),
    ('Printer HP LaserJet', 'HP Inc.', 'Stored', NOW() - INTERVAL '10 days', NOW() - INTERVAL '2 days')
ON CONFLICT DO NOTHING;

-- Insert sample timeline data
INSERT INTO item_timeline (item_id, stage, entered_time, expected_exit_time) VALUES
    (1, 'Created', NOW(), NOW() + INTERVAL '1 day'),
    (2, 'Created', NOW() - INTERVAL '5 days', NOW() - INTERVAL '4 days'),
    (2, 'In Transit', NOW() - INTERVAL '2 days', NOW() + INTERVAL '7 days'),
    (3, 'Created', NOW() - INTERVAL '10 days', NOW() - INTERVAL '9 days'),
    (3, 'In Transit', NOW() - INTERVAL '8 days', NOW() - INTERVAL '6 days'),
    (3, 'Arrived at Dock', NOW() - INTERVAL '5 days', NOW() + INTERVAL '3 days'),
    (4, 'Created', NOW() - INTERVAL '15 days', NOW() - INTERVAL '14 days'),
    (4, 'In Transit', NOW() - INTERVAL '12 days', NOW() - INTERVAL '10 days'),
    (4, 'Arrived at Dock', NOW() - INTERVAL '10 days', NOW() - INTERVAL '9 days'),
    (4, 'Inspected', NOW() - INTERVAL '8 days', NOW() + INTERVAL '1 day'),
    (5, 'Created', NOW() - INTERVAL '20 days', NOW() - INTERVAL '19 days'),
    (5, 'In Transit', NOW() - INTERVAL '17 days', NOW() - INTERVAL '15 days'),
    (5, 'Arrived at Dock', NOW() - INTERVAL '15 days', NOW() - INTERVAL '13 days'),
    (5, 'Inspected', NOW() - INTERVAL '12 days', NOW() - INTERVAL '10 days'),
    (5, 'Stored', NOW() - INTERVAL '10 days', NULL)
ON CONFLICT DO NOTHING;

-- Create a function to automatically update the update_time timestamp
CREATE OR REPLACE FUNCTION update_update_time_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.update_time = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger to automatically update update_time
DROP TRIGGER IF EXISTS update_items_update_time ON items;
CREATE TRIGGER update_items_update_time
    BEFORE UPDATE ON items
    FOR EACH ROW
    EXECUTE FUNCTION update_update_time_column();

-- Create a function to automatically add timeline entry when item stage changes
CREATE OR REPLACE FUNCTION add_timeline_entry()
RETURNS TRIGGER AS $$
BEGIN
    -- If this is an update and the stage has changed
    IF TG_OP = 'UPDATE' AND OLD.stage != NEW.stage THEN
        -- Add new timeline entry for the new stage
        INSERT INTO item_timeline (item_id, stage, entered_time, expected_exit_time)
        VALUES (NEW.id, NEW.stage, CURRENT_TIMESTAMP, NEW.expected_time);
    END IF;
    
    -- If this is an insert (new item)
    IF TG_OP = 'INSERT' THEN
        INSERT INTO item_timeline (item_id, stage, entered_time, expected_exit_time)
        VALUES (NEW.id, NEW.stage, NEW.creation_time, NEW.expected_time);
    END IF;
    
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger to automatically manage timeline entries
DROP TRIGGER IF EXISTS manage_timeline ON items;
CREATE TRIGGER manage_timeline
    AFTER INSERT OR UPDATE ON items
    FOR EACH ROW
    EXECUTE FUNCTION add_timeline_entry(); 