'use client';

import { useEffect, useState } from 'react';
import { Psychologist } from '@/types/psychologists.types';
import { getPsychologists } from '@/lib/utils/api';
import { Favorites } from '../components/FavoritesPage/Favorites';
import { PrivateRoute } from '../components/PrivateRoute';

export default function Page() {
  const [psychologists, setPsychologists] = useState<Psychologist[]>([]);
  const [favorites, setFavorites] = useState<string[]>(['']);

  useEffect(() => {
    const favoritesList = JSON.parse(localStorage.getItem('favorites') || '[]');
    setFavorites(favoritesList);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const psychologists: Psychologist[] = await getPsychologists();

      const favoritePsychologists = psychologists.filter(({ id }) =>
        favorites.includes(id)
      );

      setPsychologists(favoritePsychologists);
    };

    if (favorites.length) {
      fetchData();
    }
  }, [favorites]);

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
