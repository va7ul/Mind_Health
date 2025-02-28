'use client';

import { useEffect, useState } from 'react';
import { Psyhologist } from '@/types/psyhologists.types';
import { getPsyhologists } from '@/lib/utils/api';
import { Psyhologists } from '../components/PsyhologistsPage/Psyhologists';

export default function Page() {
  const [psyhologists, setPsyhologists] = useState<Psyhologist[]>([]);
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    const favoritesList = JSON.parse(localStorage.getItem('favorites') || '[]');
    setFavorites(favoritesList);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const psyhologists: Psyhologist[] = await getPsyhologists();

      const favoritePsyhologists = psyhologists.filter(({ id }) =>
        favorites.includes(id)
      );

      setPsyhologists(favoritePsyhologists);
    };

    if (favorites.length) {
      fetchData();
    }
  }, [favorites]);

  return <Psyhologists initialData={psyhologists} />;
}

// export default function Page() {
//   const [psyhologists, setPsyhologists] = useState<Psyhologist[]>([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const favoritesList = JSON.parse(
//         localStorage.getItem('favorites') || '[]'
//       );
//       const psyhologists: Psyhologist[] = await getPsyhologists();

//       const favoritePsyhologists = psyhologists.filter(psyhologist =>
//         favoritesList.includes(psyhologist.id)
//       );

//       setPsyhologists(favoritePsyhologists);
//     };

//     fetchData();
//   }, []);

//   return <Psyhologists initialData={psyhologists} />;
// }
