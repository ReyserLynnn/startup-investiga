import { POCKET_BASE_URL } from '@/config/global';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export const expandFields = (fields: string[]) => fields.join(',');

export const getImageUrl = ({
  url,
  collectionId,
  id,
}: {
  url: string;
  collectionId: string;
  id: string;
}) => `${POCKET_BASE_URL}/api/files/${collectionId}/${id}/${url}`;

export function generateSlug(text: string) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[\s\W-]+/g, '-');
}
