import { useEffect, useMemo, useRef, useState } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useVirtualizer } from '@tanstack/react-virtual';
import { AlertTriangle, Clock, Edit, Plus, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';

import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import {
  deleteItem,
  fetchItems,
  formatDate,
  getStageColor,
  isOverdue,
  STAGES,
  type TrackerItem,
} from '../lib/api';

// Helper function to convert stage badge colors to button styles
function getStageButtonStyle(stage: string, isSelected: boolean): string {
  const baseClasses = isSelected ? '' : 'border-2 bg-opacity-50 hover:bg-opacity-75';

  switch (stage) {
    case 'Created':
      return isSelected
        ? 'bg-gray-200 text-gray-900 border-gray-300 hover:bg-gray-300'
        : `bg-gray-50 text-gray-700 border-gray-300 hover:bg-gray-100 ${baseClasses}`;
    case 'In Transit':
      return isSelected
        ? 'bg-blue-200 text-blue-900 border-blue-300 hover:bg-blue-300'
        : `bg-blue-50 text-blue-700 border-blue-300 hover:bg-blue-100 ${baseClasses}`;
    case 'Arrived at Dock':
      return isSelected
        ? 'bg-yellow-200 text-yellow-900 border-yellow-300 hover:bg-yellow-300'
        : `bg-yellow-50 text-yellow-700 border-yellow-300 hover:bg-yellow-100 ${baseClasses}`;
    case 'Inspected':
      return isSelected
        ? 'bg-orange-200 text-orange-900 border-orange-300 hover:bg-orange-300'
        : `bg-orange-50 text-orange-700 border-orange-300 hover:bg-orange-100 ${baseClasses}`;
    case 'Stored':
      return isSelected
        ? 'bg-green-200 text-green-900 border-green-300 hover:bg-green-300'
        : `bg-green-50 text-green-700 border-green-300 hover:bg-green-100 ${baseClasses}`;
    default:
      return '';
  }
}

export function HomePage() {
  const queryClient = useQueryClient();
  const [filter, setFilter] = useState<string>('all');
  const parentRef = useRef<HTMLDivElement>(null);

  const {
    data: items = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ['items'],
    queryFn: fetchItems,
  });

  const deleteMutation = useMutation({
    mutationFn: deleteItem,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['items'] });
    },
  });

  const handleDelete = (id: number) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      deleteMutation.mutate(id.toString());
    }
  };

  const filteredItems = useMemo(() => {
    return items.filter((item: TrackerItem) => {
      if (filter === 'all') return true;
      if (filter === 'overdue') return isOverdue(item.expected_time);
      return item.stage === filter;
    });
  }, [items, filter]);

  // Calculate number of columns based on screen size
  const getColumnCount = () => {
    if (typeof window !== 'undefined') {
      const width = window.innerWidth;
      if (width >= 1280) return 4; // xl breakpoint - 4 columns
      if (width >= 1024) return 3; // lg breakpoint - 3 columns
      if (width >= 768) return 2; // md breakpoint - 2 columns
      return 1; // sm breakpoint - 1 column
    }
    return 4;
  };

  const [columnCount, setColumnCount] = useState(getColumnCount);

  // Update column count on window resize
  const handleResize = () => {
    setColumnCount(getColumnCount());
  };

  // Add resize listener
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  // Calculate rows needed for the grid
  const rowCount = Math.ceil(filteredItems.length / columnCount);

  const rowVirtualizer = useVirtualizer({
    count: rowCount,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 196,
    overscan: 2,
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading items...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <div className="text-center">
          <p className="text-destructive mb-4">Failed to load items</p>
          <Button onClick={() => window.location.reload()}>Retry</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Tracker Items</h1>
          <p className="text-muted-foreground">Track your shipments through different stages</p>
        </div>
        <Link to="/create">
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Add Item
          </Button>
        </Link>
      </div>

      {/* Filters */}
      <div className="flex items-center space-x-2 overflow-x-auto">
        <span className="text-sm font-medium whitespace-nowrap">Filter by stage:</span>
        <Button
          variant={filter === 'all' ? 'default' : 'outline'}
          size="sm"
          onClick={() => setFilter('all')}
        >
          All
        </Button>
        <Button
          variant={filter === 'overdue' ? 'default' : 'outline'}
          size="sm"
          onClick={() => setFilter('overdue')}
          className="text-red-700 border-red-300 hover:bg-red-50"
        >
          <AlertTriangle className="h-3 w-3 mr-1" />
          Overdue
        </Button>
        {STAGES.map((stage) => (
          <Button
            key={stage}
            variant="outline"
            size="sm"
            onClick={() => setFilter(stage)}
            className={`whitespace-nowrap ${getStageButtonStyle(stage, filter === stage)}`}
          >
            {stage}
          </Button>
        ))}
      </div>

      {/* Items Grid */}
      {filteredItems.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground mb-4">
            {filter === 'all'
              ? 'No items found'
              : `No ${filter === 'overdue' ? 'overdue' : filter} items found`}
          </p>
          <Link to="/create">
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Create First Item
            </Button>
          </Link>
        </div>
      ) : (
        <div
          ref={parentRef}
          className="h-[600px] overflow-auto"
          style={{
            contain: 'strict',
          }}
        >
          <div
            style={{
              height: `${rowVirtualizer.getTotalSize()}px`,
              width: '100%',
              position: 'relative',
            }}
          >
            {rowVirtualizer.getVirtualItems().map((virtualRow) => {
              const startIndex = virtualRow.index * columnCount;
              const endIndex = Math.min(startIndex + columnCount, filteredItems.length);
              const rowItems = filteredItems.slice(startIndex, endIndex);

              return (
                <div
                  key={virtualRow.index}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: `${virtualRow.size}px`,
                    transform: `translateY(${virtualRow.start}px)`,
                  }}
                >
                  <div
                    className="grid gap-2 px-1"
                    style={{ gridTemplateColumns: `repeat(${columnCount}, 1fr)` }}
                  >
                    {rowItems.map((item: TrackerItem) => (
                      <Card key={item.id} className="hover:shadow-md transition-shadow">
                        <CardHeader className="pb-2 p-4">
                          <div className="flex items-start justify-between">
                            <div className="flex-1 min-w-0">
                              <CardTitle className="text-lg truncate">{item.name}</CardTitle>
                              <CardDescription className="flex items-center gap-1 mt-1">
                                <span className="truncate">by {item.supplier}</span>
                              </CardDescription>
                            </div>
                            <div className="flex space-x-1 ml-2">
                              <Link to={`/edit/${item.id}`}>
                                <Button variant="ghost" size="icon" className="h-8 w-8">
                                  <Edit className="h-4 w-4" />
                                </Button>
                              </Link>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8 text-destructive hover:text-destructive"
                                onClick={() => handleDelete(item.id)}
                                disabled={deleteMutation.isPending}
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent className="pt-0 p-4">
                          <div className="flex flex-wrap gap-2 mb-3">
                            <Badge className={getStageColor(item.stage)}>{item.stage}</Badge>
                            {isOverdue(item.expected_time) && (
                              <Badge className="bg-red-100 text-red-800 border-red-200">
                                <AlertTriangle className="h-3 w-3 mr-1" />
                                Overdue
                              </Badge>
                            )}
                          </div>
                          <div className="space-y-1 text-xs text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <span>Created:</span>
                              <span>{formatDate(item.creation_time)}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              <span>Expected:</span>
                              <span
                                className={
                                  isOverdue(item.expected_time) ? 'text-red-600 font-medium' : ''
                                }
                              >
                                {formatDate(item.expected_time)}
                              </span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
