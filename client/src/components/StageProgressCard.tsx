import { ArrowRight, CheckCircle } from 'lucide-react';

import {
  canAdvanceStage,
  canStepBackStage,
  getStageColor,
  getStageProgress,
  type TrackerItem,
} from '../lib/api';
import { StageManagementPopup } from './StageManagementPopup';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

type StageProgressCardProps = {
  item: TrackerItem;
  itemId: string;
};

export function StageProgressCard({ item, itemId }: StageProgressCardProps) {
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
              <StageManagementPopup
                item={item}
                itemId={itemId}
                trigger={
                  <Button className="w-full">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    Manage Stage
                  </Button>
                }
              />
            ) : (
              <div className="text-center py-4">
                <CheckCircle className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <p className="text-sm font-medium text-green-600">Item Completed!</p>
                <p className="text-xs text-muted-foreground">
                  This item has reached the final stage
                </p>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
