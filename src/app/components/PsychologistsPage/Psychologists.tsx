'use client';

import clsx from 'clsx';
import { Select, MenuItem, SelectChangeEvent } from '@mui/material';
import { useEffect, useState } from 'react';
import { Psychologist } from '@/types/psychologists.types';
import { PsychologistCard } from '../Shared/PsychologistCard';
import styles from './Psychologists.module.css';
import { getFilteredPsychologist } from '@/lib/utils/getFilteredPsychologists';

type PsychologistsProps = {
  initialData: Psychologist[];
};

export const Psychologists = ({ initialData }: PsychologistsProps) => {
  const [psychologists, setPsychologists] =
    useState<Psychologist[]>(initialData);
  const [favorites, setFavorites] = useState<string[]>(['']);
  const [visibleCount, setVisibleCount] = useState(3);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    setPsychologists(initialData || []);
  }, [initialData]);

  useEffect(() => {
    const favoritesList = JSON.parse(localStorage.getItem('favorites') || '[]');
    setFavorites(favoritesList);
  }, []);

  const filteredPsychologists = getFilteredPsychologist(psychologists, filter);

  const handleFilter = (e: SelectChangeEvent) => {
    setFilter(e.target.value);
    setVisibleCount(3);
  };
  const handleLoadMore = () => setVisibleCount(visibleCount + 3);

  return (
    <div className={styles.container}>
      <div className={styles.filter}>
        <p>Filters</p>
        <Select
          value={filter}
          onChange={handleFilter}
          displayEmpty
          className={styles.customSelect}
          MenuProps={{
            classes: { paper: styles.menuPaper },
          }}
          sx={{
            '& .MuiSelect-icon': {
              color: 'rgb(251, 251, 251)',
            },
          }}
        >
          <MenuItem value="A to Z">A to Z</MenuItem>
          <MenuItem value="Z to A">Z to A</MenuItem>
          <MenuItem value="Less than 10$">Less than 10$ ↑</MenuItem>
          <MenuItem value="Greater than 10$">Greater than 10$ ↓</MenuItem>
          <MenuItem value="Popular">Popular ↓</MenuItem>
          <MenuItem value="Not popular">Not popular ↑</MenuItem>
          <MenuItem value="">Show all</MenuItem>
        </Select>
      </div>
      <ul className={styles.list}>
        {filteredPsychologists?.slice(0, visibleCount).map(psychologist => (
          <li key={psychologist.id} className={styles.card}>
            <PsychologistCard
              psychologist={psychologist}
              favorites={favorites}
              setFavorites={setFavorites}
            />
          </li>
        ))}
      </ul>
      {visibleCount < psychologists.length && (
        <button
          suppressHydrationWarning={true}
          className={clsx(styles.button, 'btn-secondary')}
          type="button"
          onClick={handleLoadMore}
        >
          Load more
        </button>
      )}
    </div>
  );
};
