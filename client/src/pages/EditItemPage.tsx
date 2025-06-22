import { useQuery } from '@tanstack/react-query';
import { ArrowLeft } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';

import { ItemDetailsCard } from '../components/ItemDetailsCard';
import { StageProgressCard } from '../components/StageProgressCard';
import { TimelineCard } from '../components/TimelineCard';
import { Button } from '../components/ui/button';
import { fetchItem } from '../lib/api';

export function EditItemPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const {
    data: item,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['item', id],
    queryFn: () => fetchItem(id!),
    enabled: !!id,
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading item...</p>
        </div>
      </div>
    );
  }

  if (error || !item) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <div className="text-center">
          <p className="text-destructive mb-4">Failed to load item</p>
          <Button onClick={() => navigate('/')}>Go Back</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center space-x-4">
        <Button variant="outline" size="icon" onClick={() => navigate('/')}>
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Edit Item</h1>
          <p className="text-muted-foreground">Update the details of your shipment</p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <ItemDetailsCard item={item} itemId={id!} />
        <div className="space-y-6">
          <StageProgressCard item={item} itemId={id!} />
          <TimelineCard item={item} />
        </div>
      </div>
    </div>
  );
}
