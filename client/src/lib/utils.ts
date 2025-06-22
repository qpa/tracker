import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Convert ISO string to datetime-local format for HTML input
 * @param isoString - ISO date string
 * @returns datetime-local formatted string
 */
export const toDateTimeLocal = (isoString: string) => {
  if (!isoString) return '';
  const date = new Date(isoString);
  // Convert to local timezone for datetime-local input
  const localDate = new Date(date.getTime() - date.getTimezoneOffset() * 60000);
  return localDate.toISOString().slice(0, 16);
};

/**
 * Convert datetime-local format to ISO string for storage
 * @param dateTimeLocal - datetime-local formatted string
 * @returns ISO date string
 */
export const fromDateTimeLocal = (dateTimeLocal: string) => {
  if (!dateTimeLocal) return '';
  const date = new Date(dateTimeLocal);
  // Convert from local timezone back to UTC for storage
  const utcDate = new Date(date.getTime() + date.getTimezoneOffset() * 60000);
  return utcDate.toISOString();
};
