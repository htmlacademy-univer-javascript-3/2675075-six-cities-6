export interface Offer {
  id: number;
  title: string;
  type: string;
  price: number;
  rating: number;
  isPremium: boolean;
  isBookmarked: boolean;
  imageSrc: string;
  city: string;
}