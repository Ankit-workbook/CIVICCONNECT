import { Timestamp } from 'firebase/firestore';

export type IssueCategory = 'pothole' | 'garbage' | 'water' | 'streetlight' | 'traffic' | 'environment' | 'civic' | 'smartcity' | 'health' | 'education' | 'transport' | 'building' | 'spitting' | 'other';

export type IssueStatus = 'pending' | 'in_progress' | 'resolved';

export type IssuePriority = 'low' | 'medium' | 'high';

export type UserRole = 'citizen' | 'admin';

export interface Location {
  lat: number;
  lng: number;
  address: string;
  ward?: string;
}

export interface StatusHistoryEntry {
  status: IssueStatus;
  timestamp: Timestamp | Date;
  note: string;
  updatedBy?: string;
}

export interface Report {
  id: string;
  userId: string;
  userName?: string;
  userEmail?: string;
  images: string[];
  category: IssueCategory;
  location: Location;
  description: string;
  authority: string;
  status: IssueStatus;
  priority: IssuePriority;
  tags: string[];
  createdAt: Timestamp | Date;
  updatedAt: Timestamp | Date;
  resolvedAt?: Timestamp | Date | null;
  statusHistory: StatusHistoryEntry[];
  upvotes: number;
}

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  reportsCount: number;
  createdAt: Timestamp | Date;
  photoURL?: string;
}

export interface CategoryInfo {
  id: IssueCategory;
  label: string;
  icon: string;
  authority: string;
  keywords: string[];
}

export interface DashboardStats {
  totalReports: number;
  pendingReports: number;
  inProgressReports: number;
  resolvedReports: number;
  averageResolutionTime: number;
  resolutionRate: number;
  recentReports: Report[];
}
