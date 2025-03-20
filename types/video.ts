export interface User {
  id: string;
  name: string;
  avatar: string;
  verified: boolean;
}

export interface VideoData {
  id: string;
  videoUrl: string;
  coverUrl: string;
  description: string;
  likeCount: number;
  commentCount: number;
  shareCount: number;
  hasProducts: boolean;
  user: User;
} 