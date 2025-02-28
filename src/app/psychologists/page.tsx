import { Psyhologist } from '@/types/psyhologists.types';
import { getPsyhologists } from '../../lib/utils/api';
import { Psyhologists } from '../components/PsyhologistsPage/Psyhologists';

export const revalidate = 60;

export default async function Page() {
  const psyhologists: Psyhologist[] = await getPsyhologists();

  return <Psyhologists initialData={psyhologists} />;
}
