const API_BASE_URL = '/api';

// Stage type definition - no more repetition!
export type Stage = 'Created' | 'In Transit' | 'Arrived at Dock' | 'Inspected' | 'Stored';

// Types matching server-side schemas
export type TrackerItem = {
  id: number;
  name: string;
  supplier: string;
  stage: Stage;
  creation_time: string;
  expected_time: string;
  update_time: string;
  timeline?: TimelineEntry[];
};

export type TimelineEntry = {
  id: number;
  item_id: number;
  stage: Stage;
  entered_time: string;
  expected_exit_time?: string;
};

export type CreateItemRequest = {
  name: string;
  supplier: string;
  stage?: Stage;
  expected_time: string;
};

export type UpdateItemRequest = {
  name?: string;
  supplier?: string;
  stage?: Stage;
  expected_time?: string;
};

export type UpdateStageRequest = {
  stage: Stage;
  expected_time?: string;
};

// API functions
export async function fetchItems(): Promise<TrackerItem[]> {
  const response = await fetch(`${API_BASE_URL}/items`);
  if (!response.ok) {
    throw new Error('Failed to fetch items');
  }
  return response.json();
}

export async function fetchItem(id: string): Promise<TrackerItem> {
  const response = await fetch(`${API_BASE_URL}/items/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch item');
  }
  return response.json();
}

export async function fetchItemTimeline(id: string): Promise<TimelineEntry[]> {
  const response = await fetch(`${API_BASE_URL}/items/${id}/timeline`);
  if (!response.ok) {
    throw new Error('Failed to fetch timeline');
  }
  return response.json();
}

export async function createItem(item: CreateItemRequest): Promise<TrackerItem> {
  const response = await fetch(`${API_BASE_URL}/items`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(item),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || 'Failed to create item');
  }

  return response.json();
}

export async function updateItem(id: string, item: UpdateItemRequest): Promise<TrackerItem> {
  const response = await fetch(`${API_BASE_URL}/items/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(item),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || 'Failed to update item');
  }

  return response.json();
}

export async function updateItemStage(
  id: string,
  stageUpdate: UpdateStageRequest
): Promise<TrackerItem> {
  const response = await fetch(`${API_BASE_URL}/items/${id}/stage`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(stageUpdate),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || 'Failed to update item stage');
  }

  return response.json();
}

export async function deleteItem(id: string): Promise<void> {
  const response = await fetch(`${API_BASE_URL}/items/${id}`, {
    method: 'DELETE',
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || 'Failed to delete item');
  }
}

// Helper functions
export const STAGES = ['Created', 'In Transit', 'Arrived at Dock', 'Inspected', 'Stored'] as const;

export function getNextStage(currentStage: Stage): Stage | null {
  const currentIndex = STAGES.indexOf(currentStage);
  if (currentIndex === -1 || currentIndex === STAGES.length - 1) {
    return null; // Invalid stage or already at final stage
  }
  return STAGES[currentIndex + 1];
}

export function getPreviousStage(currentStage: Stage): Stage | null {
  const currentIndex = STAGES.indexOf(currentStage);
  if (currentIndex === -1 || currentIndex === 0) {
    return null; // Invalid stage or already at first stage
  }
  return STAGES[currentIndex - 1];
}

export function canAdvanceStage(currentStage: Stage): boolean {
  return getNextStage(currentStage) !== null;
}

export function canStepBackStage(currentStage: Stage): boolean {
  return getPreviousStage(currentStage) !== null;
}

export function getStageProgress(currentStage: Stage): number {
  const currentIndex = STAGES.indexOf(currentStage);
  return currentIndex === -1 ? 0 : ((currentIndex + 1) / STAGES.length) * 100;
}

export function getStageColor(stage: string): string {
  switch (stage) {
    case 'Created':
      return 'bg-gray-100 text-gray-800 border-gray-200';
    case 'In Transit':
      return 'bg-blue-100 text-blue-800 border-blue-200';
    case 'Arrived at Dock':
      return 'bg-yellow-100 text-yellow-800 border-yellow-200';
    case 'Inspected':
      return 'bg-orange-100 text-orange-800 border-orange-200';
    case 'Stored':
      return 'bg-green-100 text-green-800 border-green-200';
    default:
      return 'bg-gray-100 text-gray-800 border-gray-200';
  }
}

export function isOverdue(expectedTime: string): boolean {
  return new Date(expectedTime) < new Date();
}

export function formatDateTime(dateTime: string): string {
  const date = new Date(dateTime);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');

  return `${day}/${month}/${year}, ${hours}:${minutes}`;
}

export function formatDate(dateTime: string): string {
  const date = new Date(dateTime);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
}
