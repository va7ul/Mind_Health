export type Review = {
  comment: string;
  rating: number;
  reviewer: string;
};

export type Psychologist = {
  name: string;
  avatar_url: string;
  rating: number;
  price_per_hour: number;
  experience: string;
  id: string;
  license: string;
  specialization: string;
  initial_consultation: string;
  about: string;
  reviews: Review[];
};
