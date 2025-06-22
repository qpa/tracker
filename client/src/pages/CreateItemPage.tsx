import { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { ArrowLeft, Save } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { createItem, getStageColor, type CreateItemRequest } from '../lib/api';
import { fromDateTimeLocal } from '../lib/utils';

type FormData = {
  name: string;
  supplier: string;
  expected_time: string;
};

export function CreateItemPage() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const [formData, setFormData] = useState<FormData>({
    name: '',
    supplier: '',
    expected_time: '',
  });

  const createMutation = useMutation({
    mutationFn: createItem,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['items'] });
      navigate('/');
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const itemData: CreateItemRequest = {
      name: formData.name,
      supplier: formData.supplier,
      stage: 'Created', // New items always start at 'Created'
      expected_time: formData.expected_time,
    };

    createMutation.mutate(itemData);
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // Helper function to get default expected date (7 days from now)
  const getDefaultExpectedDate = () => {
    const date = new Date();
    date.setDate(date.getDate() + 7);
    // Convert to local timezone for datetime-local input
    const localDate = new Date(date.getTime() - date.getTimezoneOffset() * 60000);
    return localDate.toISOString().slice(0, 16);
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center space-x-4">
        <Button variant="outline" size="icon" onClick={() => navigate('/')}>
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Create New Item</h1>
          <p className="text-muted-foreground">Add a new shipment to track</p>
        </div>
      </div>

      {/* Form */}
      <Card>
        <CardHeader>
          <CardTitle>Item Details</CardTitle>
          <CardDescription>Fill in the information for your new shipment</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">
                Item Name *
              </label>
              <Input
                id="name"
                type="text"
                placeholder="Enter item name (e.g., Laptop Dell XPS 13)"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                required
              />
            </div>

            {/* Supplier */}
            <div className="space-y-2">
              <label htmlFor="supplier" className="text-sm font-medium">
                Supplier *
              </label>
              <Input
                id="supplier"
                type="text"
                placeholder="Enter supplier name (e.g., Dell Technologies)"
                value={formData.supplier}
                onChange={(e) => handleInputChange('supplier', e.target.value)}
                required
              />
            </div>

            {/* Initial Stage Display */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Initial Stage</label>
              <div className="flex items-center space-x-2">
                <Badge className={getStageColor('Created')}>Created</Badge>
                <span className="text-sm text-muted-foreground">
                  All new items start at the "Created" stage
                </span>
              </div>
            </div>

            {/* Expected Time */}
            <div className="space-y-2">
              <label htmlFor="expected_time" className="text-sm font-medium">
                Expected Completion Time *
              </label>
              <Input
                id="expected_time"
                type="datetime-local"
                value={formData.expected_time || getDefaultExpectedDate()}
                onChange={(e) => {
                  // Convert datetime-local value to ISO string
                  const value = e.target.value ? fromDateTimeLocal(e.target.value) : '';
                  handleInputChange('expected_time', value);
                }}
                required
              />
              <p className="text-xs text-muted-foreground">
                When do you expect this item to complete its current stage or reach its final
                destination?
              </p>
            </div>

            {/* Submit Button */}
            <div className="flex space-x-2">
              <Button
                type="submit"
                disabled={createMutation.isPending || !formData.name || !formData.supplier}
              >
                <Save className="h-4 w-4 mr-2" />
                {createMutation.isPending ? 'Creating...' : 'Create Item'}
              </Button>
              <Button type="button" variant="outline" onClick={() => navigate('/')}>
                Cancel
              </Button>
            </div>

            {createMutation.error && (
              <div className="text-sm text-destructive">Error: {createMutation.error.message}</div>
            )}
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
