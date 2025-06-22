import { ArrowRight, CheckCircle, Circle, Clock, RotateCcw } from 'lucide-react';

import {
  formatDateTime,
  getStageColor,
  isOverdue,
  STAGES,
  type TimelineEntry,
  type TrackerItem,
} from '../lib/api';
import { Badge } from './ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

type TimelineCardProps = {
  item: TrackerItem;
};

export function TimelineCard({ item }: TimelineCardProps) {
  // Get all timeline entries sorted by time (oldest first for chronological timeline)
  const sortedTimeline = item.timeline
    ? [...item.timeline].sort(
        (a, b) => new Date(a.entered_time).getTime() - new Date(b.entered_time).getTime()
      )
    : [];

  // Determine if a stage transition was stepping back
  const isStepBack = (currentEntry: TimelineEntry, index: number): boolean => {
    if (index === 0) return false; // First entry can't be a step back
    const previousEntry = sortedTimeline[index - 1];
    const currentStageIndex = STAGES.indexOf(currentEntry.stage);
    const previousStageIndex = STAGES.indexOf(previousEntry.stage);
    return currentStageIndex < previousStageIndex;
  };

  // Get stages that have been visited
  const visitedStages = new Set(sortedTimeline.map((entry) => entry.stage));

  // Get current stage index and future stages
  const currentStageIndex = STAGES.indexOf(item.stage);
  const futureStages = STAGES.slice(currentStageIndex + 1).filter(
    (stage) => !visitedStages.has(stage)
  );

  // Calculate delay ratio for a stage transition
  const getDelayInfo = (currentEntry: TimelineEntry, nextEntry?: TimelineEntry) => {
    if (!currentEntry.expected_exit_time || !nextEntry) {
      return { isDelayed: false, greenPercent: 100, redPercent: 0 };
    }

    const expectedExit = new Date(currentEntry.expected_exit_time).getTime();
    const actualExit = new Date(nextEntry.entered_time).getTime();
    const entryTime = new Date(currentEntry.entered_time).getTime();

    if (actualExit <= expectedExit) {
      return { isDelayed: false, greenPercent: 100, redPercent: 0 };
    }

    const expectedDuration = expectedExit - entryTime;
    const actualDuration = actualExit - entryTime;

    // Calculate percentages: green represents expected time, red represents delay
    const greenPercent = (expectedDuration / actualDuration) * 100;
    const redPercent = 100 - greenPercent;

    return { isDelayed: true, greenPercent, redPercent };
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Timeline</CardTitle>
        <CardDescription>Complete journey: past events and upcoming stages</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Actual Timeline Events */}
          {sortedTimeline.length === 0 ? (
            <div className="text-center py-4 text-gray-500">
              <p>No timeline entries yet</p>
            </div>
          ) : (
            sortedTimeline.map((entry, index) => {
              const isCurrentStage =
                item.stage === entry.stage && index === sortedTimeline.length - 1;
              const isAtFinalStage = entry.stage === 'Stored';
              const isSteppingBack = isStepBack(entry, index);
              const nextEntry = sortedTimeline[index + 1];
              const delayInfo = getDelayInfo(entry, nextEntry);

              return (
                <div key={`${entry.id}-${index}`} className="flex gap-3">
                  <div className="flex flex-col items-center">
                    {isCurrentStage && !isAtFinalStage ? (
                      <Circle className="h-4 w-4 text-blue-600 fill-current" />
                    ) : (
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    )}
                    {(index < sortedTimeline.length - 1 || futureStages.length > 0) && (
                      <div
                        className="w-1 h-16 mt-2 rounded-full"
                        style={{
                          background: delayInfo.isDelayed
                            ? `linear-gradient(to bottom, #10b981 0%, #10b981 ${delayInfo.greenPercent}%, #ef4444 ${delayInfo.greenPercent}%, #dc2626 100%)`
                            : '#10b981',
                        }}
                      ></div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <Badge className={getStageColor(entry.stage)}>{entry.stage}</Badge>
                      {isSteppingBack && (
                        <div
                          className="flex items-center gap-1"
                          title="Stepped back from previous stage"
                        >
                          <RotateCcw className="h-3 w-3 text-amber-600" />
                          <span className="text-xs text-amber-600 font-medium">Stepped Back</span>
                        </div>
                      )}
                      {isCurrentStage && !isAtFinalStage && (
                        <span className="text-xs text-blue-600 font-medium">Current</span>
                      )}
                      {!isCurrentStage && !isSteppingBack && index > 0 && (
                        <ArrowRight className="h-3 w-3 text-green-600" />
                      )}
                    </div>

                    {/* Timeline entry details */}
                    <div className="text-xs text-muted-foreground">
                      <div className="font-medium">
                        Entered: {formatDateTime(entry.entered_time)}
                      </div>
                      {entry.expected_exit_time && (
                        <div>Expected exit: {formatDateTime(entry.expected_exit_time)}</div>
                      )}
                      {nextEntry && <div>Exited: {formatDateTime(nextEntry.entered_time)}</div>}
                      {delayInfo.isDelayed && nextEntry && (
                        <div className="text-red-600 font-medium">
                          Delayed by{' '}
                          {Math.round(
                            (new Date(nextEntry.entered_time).getTime() -
                              new Date(entry.expected_exit_time!).getTime()) /
                              (1000 * 60 * 60 * 24)
                          )}{' '}
                          days
                        </div>
                      )}
                      {isCurrentStage && (
                        <div className="mt-1">
                          <div>Expected completion: {formatDateTime(item.expected_time)}</div>
                          {isOverdue(item.expected_time) && (
                            <div className="text-red-600 font-medium">Overdue</div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })
          )}

          {/* Future Stages */}
          {futureStages.length > 0 && (
            <>
              {futureStages.map((stage, index) => (
                <div key={`future-${stage}`} className="flex gap-3">
                  <div className="flex flex-col items-center">
                    <Clock className="h-4 w-4 text-gray-400" />
                    {index < futureStages.length - 1 && (
                      <div className="w-1 h-16 mt-2 bg-gray-200 rounded-full"></div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <Badge className="bg-gray-100 text-gray-500 border-gray-200">{stage}</Badge>
                      <span className="text-xs text-gray-500">Upcoming</span>
                    </div>
                    <div className="text-xs text-gray-400">Not started</div>
                  </div>
                </div>
              ))}
            </>
          )}

          {/* Show if item is at final stage */}
          {item.stage === 'Stored' && sortedTimeline.length > 0 && (
            <div className="text-center py-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-50 text-green-700 rounded-full text-xs font-medium">
                <CheckCircle className="h-3 w-3" />
                Journey Complete!
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
