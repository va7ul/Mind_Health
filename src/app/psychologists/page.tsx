import { getPsyhologists } from '../../lib/utils/api';
import { Psyhologists } from '../components/PsyhologistsPage/Psyhologists';

export type Review = {
  comment: string;
  rating: number;
  reviewer: string;
};

export type Psyhologist = {
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

export const revalidate = 60;

export default async function Page() {
  const psyhologists: Psyhologist[] = await getPsyhologists();

  return <Psyhologists initialData={psyhologists} />;
}
