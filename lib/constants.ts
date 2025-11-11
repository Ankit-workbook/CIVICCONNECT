import { CategoryInfo, IssueCategory } from '@/types';

export const CATEGORIES: CategoryInfo[] = [
  {
    id: 'pothole',
    label: 'Pothole',
    icon: '🕳️',
    authority: 'Public Works Department',
    keywords: ['pothole', 'road damage', 'crater', 'broken road', 'hole in road'],
  },
  {
    id: 'garbage',
    label: 'Open Garbage',
    icon: '🚮',
    authority: 'Nagar Nigam - Sanitation',
    keywords: ['trash', 'waste', 'garbage', 'dump', 'litter', 'rubbish'],
  },
  {
    id: 'water',
    label: 'Water Leakage',
    icon: '💧',
    authority: 'Water Supply Department',
    keywords: ['leak', 'burst pipe', 'water overflow', 'drainage', 'sewage'],
  },
  {
    id: 'streetlight',
    label: 'Streetlight Failure',
    icon: '💡',
    authority: 'Electrical Department',
    keywords: ['light', 'lamp', 'dark', 'bulb', 'pole', 'street light'],
  },
  {
    id: 'traffic',
    label: 'Traffic Issue',
    icon: '🚦',
    authority: 'Traffic Police Department',
    keywords: ['traffic', 'congestion', 'signal', 'jam', 'road block', 'accident'],
  },
  {
    id: 'environment',
    label: 'Environment',
    icon: '🌳',
    authority: 'Environment & Forestry Department',
    keywords: ['tree', 'pollution', 'air quality', 'green', 'park', 'garden'],
  },
  {
    id: 'civic',
    label: 'Civic Issue',
    icon: '🏛️',
    authority: 'Municipal Corporation',
    keywords: ['civic', 'municipal', 'public', 'community', 'administration'],
  },
  {
    id: 'smartcity',
    label: 'Smart City',
    icon: '🌐',
    authority: 'Smart City Corporation',
    keywords: ['smart city', 'digital', 'technology', 'innovation', 'smart infrastructure'],
  },
  {
    id: 'health',
    label: 'Health & Sanitation',
    icon: '🏥',
    authority: 'Health Department',
    keywords: ['health', 'hospital', 'clinic', 'medical', 'sanitation', 'hygiene'],
  },
  {
    id: 'education',
    label: 'Education',
    icon: '🎓',
    authority: 'Education Department',
    keywords: ['school', 'education', 'college', 'library', 'learning', 'students'],
  },
  {
    id: 'transport',
    label: 'Public Transport',
    icon: '🚌',
    authority: 'Transport Department',
    keywords: ['bus', 'transport', 'metro', 'station', 'auto', 'public vehicle'],
  },
  {
    id: 'building',
    label: 'Building & Planning',
    icon: '🏗️',
    authority: 'Town Planning Department',
    keywords: ['building', 'construction', 'illegal', 'planning', 'permit', 'violation'],
  },
  {
    id: 'spitting',
    label: 'Public Spitting',
    icon: '🤮',
    authority: 'Health Department',
    keywords: ['spit', 'betel', 'pan', 'stain', 'tobacco'],
  },
  {
    id: 'other',
    label: 'Other Issue',
    icon: '⚠️',
    authority: 'Municipal Corporation',
    keywords: [],
  },
];

export const STATUS_OPTIONS = [
  { value: 'pending', label: 'Pending', color: 'yellow' },
  { value: 'in_progress', label: 'In Progress', color: 'blue' },
  { value: 'resolved', label: 'Resolved', color: 'green' },
];

export const PRIORITY_OPTIONS = [
  { value: 'low', label: 'Low', color: 'gray' },
  { value: 'medium', label: 'Medium', color: 'orange' },
  { value: 'high', label: 'High', color: 'red' },
];
