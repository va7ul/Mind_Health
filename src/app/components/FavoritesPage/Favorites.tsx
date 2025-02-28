'use client';

import clsx from 'clsx';
import { Select, MenuItem, SelectChangeEvent } from '@mui/material';
import { useEffect, useState } from 'react';
import { Psyhologist } from '@/types/psyhologists.types';
import { PsyhologistCard } from '../Shared/PsyhologistCard';
import styles from './Favorites.module.css';
import { getFilteredPsyhologist } from '@/lib/utils/getFilteredPsyhologists';

type PsyhologistsProps = {
  initialData: Psyhologist[];
};

export const Psyhologists = ({ initialData }: PsyhologistsProps) => {
  console.log(initialData);

  const [psyhologists, setPsyhologists] = useState<Psyhologist[]>(initialData);
  const [visibleCount, setVisibleCount] = useState(3);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    setPsyhologists(initialData || []);
  }, [initialData]);

  const filteredPsyhologists = getFilteredPsyhologist(psyhologists, filter);

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
        {filteredPsyhologists?.slice(0, visibleCount).map(psyhologist => (
          <li key={psyhologist.id} className={styles.card}>
            <PsyhologistCard psyhologist={psyhologist} />
          </li>
        ))}
      </ul>
      {visibleCount < psyhologists.length && (
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
