import { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { ArrowLeftIcon, ArrowRight } from 'lucide-react';

import {
  canAdvanceStage,
  canStepBackStage,
  getNextStage,
  getPreviousStage,
  updateItemStage,
  type TrackerItem,
  type UpdateStageRequest,
} from '../lib/api';
import { fromDateTimeLocal, toDateTimeLocal } from '../lib/utils';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';

type StageManagementPopupProps = {
  item: TrackerItem;
  itemId: string;
  trigger: React.ReactNode;
  compact?: boolean;
};

export function StageManagementPopup({
  item,
  itemId,
  trigger,
  compact = false,
}: StageManagementPopupProps) {
  const queryClient = useQueryClient();
  const [newExpectedTime, setNewExpectedTime] = useState('');
  const [open, setOpen] = useState(false);

  const updateStageMutation = useMutation({
    mutationFn: (data: UpdateStageRequest) => updateItemStage(itemId, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['items'] });
      queryClient.invalidateQueries({ queryKey: ['item', itemId] });
      setOpen(false);
      setNewExpectedTime('');
    },
  });

  const handleStageChange = (action: 'advance' | 'step-back') => {
    if (!item) return;

    const targetStage =
      action === 'advance' ? getNextStage(item.stage) : getPreviousStage(item.stage);

    if (!targetStage) return;

    const stageData: UpdateStageRequest = {
      stage: targetStage,
      expected_time: newExpectedTime || undefined,
    };

    updateStageMutation.mutate(stageData);
  };

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
    if (newOpen && !newExpectedTime) {
      // Initialize with current expected time or a default (current time + 7 days)
      const defaultTime =
        item.expected_time || new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString();
      setNewExpectedTime(defaultTime);
    }
    if (!newOpen) {
      setNewExpectedTime('');
    }
  };

  // Don't show anything if item can't be advanced or stepped back
  if (!canAdvanceStage(item.stage) && !canStepBackStage(item.stage)) {
    return null;
  }

  return (
    <Popover open={open} onOpenChange={handleOpenChange}>
      <PopoverTrigger asChild>{trigger}</PopoverTrigger>
      <PopoverContent align="end" className={`${compact ? 'w-80' : 'w-96'} p-3 space-y-3`}>
        <div className="flex items-center justify-between">
          <h4 className={`font-medium ${compact ? 'text-xs' : 'text-sm'}`}>Stage Management</h4>
        </div>

        <p className={`text-muted-foreground ${compact ? 'text-xs' : 'text-xs'}`}>
          Current: "{item.stage}"
        </p>

        {/* Expected Time Update */}
        <div className="space-y-2">
          <label className={`font-medium ${compact ? 'text-xs' : 'text-xs'}`}>
            Expected time (optional)
          </label>
          <Input
            type="datetime-local"
            value={toDateTimeLocal(newExpectedTime)}
            onChange={(e) => setNewExpectedTime(fromDateTimeLocal(e.target.value))}
            placeholder="Update expected time"
            className={compact ? 'text-xs h-7' : 'text-xs'}
          />
        </div>

        <div className="flex gap-2">
          <Button
            variant="outline"
            onClick={() => setOpen(false)}
            className={`flex-1 ${compact ? 'text-xs h-7' : 'text-xs'}`}
            size="sm"
          >
            Cancel
          </Button>
          {canStepBackStage(item.stage) && (
            <Button
              variant="outline"
              onClick={() => handleStageChange('step-back')}
              disabled={updateStageMutation.isPending}
              className={`flex-1 ${compact ? 'text-xs h-7' : 'text-xs'}`}
              size="sm"
            >
              <ArrowLeftIcon className="h-3 w-3 mr-1" />
              Back
            </Button>
          )}
          {canAdvanceStage(item.stage) && (
            <Button
              onClick={() => handleStageChange('advance')}
              disabled={updateStageMutation.isPending}
              className={`flex-1 ${compact ? 'text-xs h-7' : 'text-xs'}`}
              size="sm"
            >
              <ArrowRight className="h-3 w-3 mr-1" />
              {compact ? getNextStage(item.stage) : `Advance to "${getNextStage(item.stage)}"`}
            </Button>
          )}
        </div>

        {updateStageMutation.error && (
          <div className={`text-destructive ${compact ? 'text-xs' : 'text-sm'}`}>
            Error: {updateStageMutation.error.message}
          </div>
        )}
      </PopoverContent>
    </Popover>
  );
}
