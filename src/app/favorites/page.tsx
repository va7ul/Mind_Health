'use client';

import { useEffect, useState } from 'react';
import { Psychologist } from '@/types/psychologists.types';
import { getPsychologists } from '@/lib/utils/api';
import { Favorites } from '../components/FavoritesPage/Favorites';
import { PrivateRoute } from '../components/PrivateRoute';
import { CustomLoader } from '../components/CustomLoader';

export default function Page() {
  const [psychologists, setPsychologists] = useState<Psychologist[]>([]);
  const [favorites, setFavorites] = useState<string[]>(['']);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const favoritesList = JSON.parse(localStorage.getItem('favorites') || '[]');
    setFavorites(favoritesList);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const psychologists: Psychologist[] = await getPsychologists();

      const favoritePsychologists = psychologists.filter(({ id }) =>
        favorites.includes(id)
      );

      setPsychologists(favoritePsychologists);
      setLoading(false);
    };

    if (favorites.length) {
      fetchData();
    } else {
      setLoading(false);
    }
  }, [favorites]);

  if (loading) {
    return <CustomLoader />;
  }

  return (
    <PrivateRoute>
      <Favorites
        initialData={psychologists}
        favorites={favorites}
        setFavorites={setFavorites}
      />
    </PrivateRoute>
  );
}
