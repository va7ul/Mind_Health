import { Psyhologist } from '@/app/psychologists/page';

const params: Record<string, (a: Psyhologist, b: Psyhologist) => number> = {
  'A to Z': (a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()),
  'Z to A': (a, b) => b.name.toLowerCase().localeCompare(a.name.toLowerCase()),
  'Less than 10$': (a, b) => a.price_per_hour - b.price_per_hour,
  'Greater than 10$': (a, b) => b.price_per_hour - a.price_per_hour,
  Popular: (a, b) => b.rating - a.rating,
  'Not popular': (a, b) => a.rating - b.rating,
  'Show all': () => 0,
};

export const getFilteredPsyhologist = (
  psyhologists: Psyhologist[],
  filter: string
): Psyhologist[] => {
  const filteredPsyhologists = psyhologists.toSorted(
    params[filter] || params['Show all']
  );

  return filteredPsyhologists;
};
