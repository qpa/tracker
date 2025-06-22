import { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { ArrowLeftIcon, ArrowRight, CheckCircle, ChevronUp } from 'lucide-react';

import {
  canAdvanceStage,
  canStepBackStage,
  getNextStage,
  getPreviousStage,
  getStageColor,
  getStageProgress,
  updateItemStage,
  type TrackerItem,
  type UpdateStageRequest,
} from '../lib/api';
import { fromDateTimeLocal, toDateTimeLocal } from '../lib/utils';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';

type StageProgressCardProps = {
  item: TrackerItem;
  itemId: string;
};

export function StageProgressCard({ item, itemId }: StageProgressCardProps) {
  const queryClient = useQueryClient();

  const [newExpectedTime, setNewExpectedTime] = useState('');
  const [isStageManagementOpen, setIsStageManagementOpen] = useState(false);
  const [stageAction, setStageAction] = useState<'advance' | 'step-back'>('advance');

  const updateStageMutation = useMutation({
    mutationFn: (data: UpdateStageRequest) => updateItemStage(itemId, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['items'] });
      queryClient.invalidateQueries({ queryKey: ['item', itemId] });
    },
  });

  const handleStageChange = () => {
    if (!item) return;

    const targetStage =
      stageAction === 'advance' ? getNextStage(item.stage) : getPreviousStage(item.stage);

    if (!targetStage) return;

    const stageData: UpdateStageRequest = {
      stage: targetStage,
      expected_time: newExpectedTime || undefined,
    };

    updateStageMutation.mutate(stageData);
    setIsStageManagementOpen(false);
    setNewExpectedTime(''); // Reset for next time
  };

  const openStageManagement = (action: 'advance' | 'step-back') => {
    setStageAction(action);
    setIsStageManagementOpen(true);
    // Initialize with current expected time or a default (current time + 7 days)
    if (!newExpectedTime) {
      const defaultTime =
        item.expected_time || new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString();
      setNewExpectedTime(defaultTime);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Stage Progress</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Progress Bar */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Progress</span>
              <span>{Math.round(getStageProgress(item.stage))}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${getStageProgress(item.stage)}%` }}
              />
            </div>
          </div>

          {/* Current Stage Display */}
          <div className="flex items-center gap-3">
            <Badge className={getStageColor(item.stage)}>{item.stage}</Badge>
          </div>

          {/* Stage Management Actions */}
          <div className="space-y-3">
            {canAdvanceStage(item.stage) || canStepBackStage(item.stage) ? (
              <>
                <div className="flex gap-2">
                  {canStepBackStage(item.stage) && (
                    <Button
                      variant="outline"
                      onClick={() => openStageManagement('step-back')}
                      disabled={updateStageMutation.isPending}
                    >
                      <ArrowLeftIcon className="h-4 w-4 mr-1" />
                      Back
                    </Button>
                  )}

                  {canAdvanceStage(item.stage) && (
                    <Button
                      onClick={() => openStageManagement('advance')}
                      disabled={updateStageMutation.isPending}
                      className="flex-1"
                    >
                      <ArrowRight className="h-4 w-4 mr-2" />
                      Advance to {getNextStage(item.stage)}
                    </Button>
                  )}
                </div>

                {/* Collapsible Stage Management Panel */}
                {isStageManagementOpen && (
                  <div className="border rounded-lg p-4 bg-gray-50 space-y-4">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium">
                        {stageAction === 'advance' ? 'Advance Stage' : 'Step Back Stage'}
                      </h4>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => {
                          setIsStageManagementOpen(false);
                          setNewExpectedTime(''); // Reset for next time
                        }}
                      >
                        <ChevronUp className="h-4 w-4" />
                      </Button>
                    </div>

                    <p className="text-sm text-muted-foreground">
                      {stageAction === 'advance'
                        ? `Move item from "${item.stage}" to "${getNextStage(item.stage)}"`
                        : `Move item from "${item.stage}" back to "${getPreviousStage(item.stage)}"`}
                    </p>

                    {/* Expected Time Update */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium">
                        Expected completion time for{' '}
                        {stageAction === 'advance' ? 'next' : 'previous'} stage (optional)
                      </label>
                      <Input
                        type="datetime-local"
                        value={toDateTimeLocal(newExpectedTime)}
                        onChange={(e) => setNewExpectedTime(fromDateTimeLocal(e.target.value))}
                        placeholder="Update expected time"
                      />
                    </div>

                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        onClick={() => {
                          setIsStageManagementOpen(false);
                          setNewExpectedTime(''); // Reset for next time
                        }}
                        className="flex-1"
                      >
                        Cancel
                      </Button>
                      <Button
                        onClick={handleStageChange}
                        disabled={updateStageMutation.isPending}
                        className="flex-1"
                      >
                        {stageAction === 'advance' ? (
                          <>
                            <ArrowRight className="h-4 w-4 mr-2" />
                            {updateStageMutation.isPending
                              ? 'Advancing...'
                              : `Advance to ${getNextStage(item.stage)}`}
                          </>
                        ) : (
                          <>
                            <ArrowLeftIcon className="h-4 w-4 mr-2" />
                            {updateStageMutation.isPending
                              ? 'Going back...'
                              : `Step back to ${getPreviousStage(item.stage)}`}
                          </>
                        )}
                      </Button>
                    </div>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-4">
                <CheckCircle className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <p className="text-sm font-medium text-green-600">Item Completed!</p>
                <p className="text-xs text-muted-foreground">
                  This item has reached the final stage
                </p>
              </div>
            )}

            {updateStageMutation.error && (
              <div className="text-sm text-destructive">
                Error: {updateStageMutation.error.message}
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
