import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { IssueCategory, IssueStatus, IssuePriority } from "@/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date | any): string {
  if (!date) return 'N/A';
  
  const dateObj = date?.toDate ? date.toDate() : new Date(date);
  
  return new Intl.DateTimeFormat('en-IN', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(dateObj);
}

export function getRelativeTime(date: Date | any): string {
  if (!date) return 'N/A';
  
  const dateObj = date?.toDate ? date.toDate() : new Date(date);
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - dateObj.getTime()) / 1000);
  
  if (diffInSeconds < 60) return 'Just now';
  if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} minutes ago`;
  if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)} hours ago`;
  if (diffInSeconds < 604800) return `${Math.floor(diffInSeconds / 86400)} days ago`;
  
  return formatDate(dateObj);
}

export function getStatusColor(status: IssueStatus): string {
  const colors = {
    pending: 'bg-yellow-100 text-yellow-800 border-yellow-300',
    in_progress: 'bg-blue-100 text-blue-800 border-blue-300',
    resolved: 'bg-green-100 text-green-800 border-green-300',
  };
  return colors[status] || colors.pending;
}

export function getPriorityColor(priority: IssuePriority): string {
  const colors = {
    low: 'bg-gray-100 text-gray-800',
    medium: 'bg-orange-100 text-orange-800',
    high: 'bg-red-100 text-red-800',
  };
  return colors[priority] || colors.low;
}

export function getCategoryIcon(category: IssueCategory): string {
  const icons = {
    pothole: '🕳️',
    garbage: '🚮',
    water: '💧',
    streetlight: '💡',
    traffic: '🚦',
    environment: '🌳',
    civic: '🏛️',
    smartcity: '🌐',
    health: '🏥',
    education: '🎓',
    transport: '🚌',
    building: '🏗️',
    spitting: '🤮',
    other: '⚠️',
  };
  return icons[category] || icons.other;
}

export function getCategoryLabel(category: IssueCategory): string {
  const labels = {
    pothole: 'Pothole',
    garbage: 'Open Garbage',
    water: 'Water Leakage',
    streetlight: 'Streetlight Failure',
    traffic: 'Traffic Issue',
    environment: 'Environment',
    civic: 'Civic Issue',
    smartcity: 'Smart City',
    health: 'Health & Sanitation',
    education: 'Education',
    transport: 'Public Transport',
    building: 'Building & Planning',
    spitting: 'Public Spitting',
    other: 'Other Issue',
  };
  return labels[category] || labels.other;
}

export function getAuthorityFromCategory(category: IssueCategory): string {
  const authorities = {
    pothole: 'Public Works Department',
    garbage: 'Nagar Nigam - Sanitation',
    water: 'Water Supply Department',
    streetlight: 'Electrical Department',
    traffic: 'Traffic Police Department',
    environment: 'Environment & Forestry Department',
    civic: 'Municipal Corporation',
    smartcity: 'Smart City Corporation',
    health: 'Health Department',
    education: 'Education Department',
    transport: 'Transport Department',
    building: 'Town Planning Department',
    spitting: 'Health Department',
    other: 'Municipal Corporation',
  };
  return authorities[category] || authorities.other;
}

export function detectCategoryFromDescription(description: string): IssueCategory | null {
  const lowerDesc = description.toLowerCase();
  
  const categoryKeywords: Record<IssueCategory, string[]> = {
    pothole: ['pothole', 'road damage', 'crater', 'broken road', 'hole in road'],
    garbage: ['trash', 'waste', 'garbage', 'dump', 'litter', 'rubbish'],
    water: ['leak', 'burst pipe', 'water overflow', 'drainage', 'sewage'],
    streetlight: ['light', 'lamp', 'dark', 'bulb', 'pole', 'street light'],
    traffic: ['traffic', 'congestion', 'signal', 'jam', 'road block', 'accident'],
    environment: ['tree', 'pollution', 'air quality', 'green', 'park', 'garden'],
    civic: ['civic', 'municipal', 'public', 'community', 'administration'],
    smartcity: ['smart city', 'digital', 'technology', 'innovation', 'smart infrastructure'],
    health: ['health', 'hospital', 'clinic', 'medical', 'sanitation', 'hygiene'],
    education: ['school', 'education', 'college', 'library', 'learning', 'students'],
    transport: ['bus', 'transport', 'metro', 'station', 'auto', 'public vehicle'],
    building: ['building', 'construction', 'illegal', 'planning', 'permit', 'violation'],
    spitting: ['spit', 'betel', 'pan', 'stain', 'tobacco'],
    other: [],
  };
  
  for (const [category, keywords] of Object.entries(categoryKeywords)) {
    if (keywords.some(keyword => lowerDesc.includes(keyword))) {
      return category as IssueCategory;
    }
  }
  
  return null;
}

export async function compressImage(file: File, maxSizeMB: number = 2): Promise<File> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event) => {
      const img = new Image();
      img.src = event.target?.result as string;
      img.onload = () => {
        const canvas = document.createElement('canvas');
        let width = img.width;
        let height = img.height;
        
        // Max dimensions
        const MAX_WIDTH = 1920;
        const MAX_HEIGHT = 1080;
        
        if (width > height) {
          if (width > MAX_WIDTH) {
            height *= MAX_WIDTH / width;
            width = MAX_WIDTH;
          }
        } else {
          if (height > MAX_HEIGHT) {
            width *= MAX_HEIGHT / height;
            height = MAX_HEIGHT;
          }
        }
        
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx?.drawImage(img, 0, 0, width, height);
        
        canvas.toBlob(
          (blob) => {
            if (blob) {
              const compressedFile = new File([blob], file.name, {
                type: 'image/jpeg',
                lastModified: Date.now(),
              });
              resolve(compressedFile);
            } else {
              reject(new Error('Canvas to Blob conversion failed'));
            }
          },
          'image/jpeg',
          0.8
        );
      };
      img.onerror = reject;
    };
    reader.onerror = reject;
  });
}

export function generateTrackingId(): string {
  const timestamp = Date.now().toString(36);
  const random = Math.random().toString(36).substring(2, 7);
  return `CC-${timestamp}-${random}`.toUpperCase();
}
