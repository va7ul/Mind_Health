import { Psychologist } from '@/types/psychologists.types';
import { getPsychologists } from '../../lib/utils/api';
import { Psychologists } from '../components/PsychologistsPage/Psychologists';

export const revalidate = 60;

export default async function Page() {
  const psyhologists: Psychologist[] = await getPsychologists();

  return <Psychologists initialData={psyhologists} />;
}
