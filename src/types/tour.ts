export type Tour = {
  id: string;
  slug: string;
  title: string;
  destination: string;
  location: string;
  image: string;
  duration: string;
  durationType: "Half Day" | "Full Day" | "Multi Day";
  groupSize: string;
  rating: number;
  reviewCount: number;
  price: number;
  featured: boolean;
};