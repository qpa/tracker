import { useEffect, useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Save } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import { updateItem, type TrackerItem, type UpdateItemRequest } from '../lib/api';
import { fromDateTimeLocal, toDateTimeLocal } from '../lib/utils';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';

type FormData = {
  name: string;
  supplier: string;
  expected_time: string;
};

type ItemDetailsCardProps = {
  item: TrackerItem;
  itemId: string;
};

export function ItemDetailsCard({ item, itemId }: ItemDetailsCardProps) {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const [formData, setFormData] = useState<FormData>({
    name: '',
    supplier: '',
    expected_time: '',
  });

  const updateMutation = useMutation({
    mutationFn: (data: UpdateItemRequest) => updateItem(itemId, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['items'] });
      queryClient.invalidateQueries({ queryKey: ['item', itemId] });
      navigate('/');
    },
  });

  useEffect(() => {
    if (item) {
      setFormData({
        name: item.name,
        supplier: item.supplier,
        expected_time: item.expected_time,
      });
    }
  }, [item]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const itemData: UpdateItemRequest = {
      name: formData.name,
      supplier: formData.supplier,
      expected_time: formData.expected_time,
    };

    updateMutation.mutate(itemData);
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Item Details</CardTitle>
        <CardDescription>Modify the basic information for your shipment</CardDescription>
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
              placeholder="Enter item name"
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
              placeholder="Enter supplier name"
              value={formData.supplier}
              onChange={(e) => handleInputChange('supplier', e.target.value)}
              required
            />
          </div>

          {/* Expected Time */}
          <div className="space-y-2">
            <label htmlFor="expected_time" className="text-sm font-medium">
              Expected Completion Time *
            </label>
            <Input
              id="expected_time"
              type="datetime-local"
              value={toDateTimeLocal(formData.expected_time)}
              onChange={(e) =>
                handleInputChange('expected_time', fromDateTimeLocal(e.target.value))
              }
              required
            />
          </div>

          {/* Submit Button */}
          <div className="flex space-x-2">
            <Button
              type="submit"
              disabled={updateMutation.isPending || !formData.name || !formData.supplier}
            >
              <Save className="h-4 w-4 mr-2" />
              {updateMutation.isPending ? 'Updating...' : 'Update Item'}
            </Button>
            <Button type="button" variant="outline" onClick={() => navigate('/')}>
              Cancel
            </Button>
          </div>

          {updateMutation.error && (
            <div className="text-sm text-destructive">Error: {updateMutation.error.message}</div>
          )}
        </form>
      </CardContent>
    </Card>
  );
}
