'use client';

import clsx from 'clsx';
import { Select, MenuItem } from '@mui/material';
import { useEffect, useState } from 'react';
import { Psyhologist } from '@/app/psychologists/page';
import { PsyhologistCard } from './PsyhologistCard';
import styles from './Psyhologists.module.css';

type PsyhologistsProps = {
  initialData: Psyhologist[];
};

export const Psyhologists = ({ initialData }: PsyhologistsProps) => {
  const [psyhologists, setPsyhologists] = useState<Psyhologist[]>(initialData);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    setPsyhologists(initialData || []);
  }, [initialData]);


  
  const filteredPsyhologists = psyhologists.filter(psyhologist =>
    psyhologist.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <div className={styles.filter}>
        <p>Filters</p>
        <Select
          value={filter}
          onChange={e => setFilter(e.target.value)}
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
          <MenuItem value="Less than 10$">Less than 10$</MenuItem>
          <MenuItem value="Greater than 10$">Greater than 10$</MenuItem>
          <MenuItem value="Popular">Popular</MenuItem>
          <MenuItem value="Not popular">Not popular</MenuItem>
          <MenuItem value="">Show all</MenuItem>
        </Select>
      </div>
      <ul className={styles.list}>
        {filteredPsyhologists?.map((psyhologist, index) => (
          <li key={index} className={styles.card}>
            <PsyhologistCard psyhologist={psyhologist} />
          </li>
        ))}
      </ul>
      <button
        suppressHydrationWarning={true}
        className={clsx(styles.button, 'btn-secondary')}
        type="button"
      >
        Load more
      </button>
    </div>
  );
};
