import { Category } from "../category";

export interface Clip {
  id: string;
  description: string;
  thumbnailUrl: string;
  url: string;
  duration: number;
  likeCountDisplay: string;
  shareCountDisplay: string;
  clipCategories: Category[];
  deepLink: string;
}
