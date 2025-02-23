'use client';

import clsx from 'clsx';
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
    console.log(initialData[0].reviews);
  }, [initialData]);

  const filteredPsyhologists = psyhologists.filter(psyhologist =>
    psyhologist.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <input
        suppressHydrationWarning={true}
        className={styles.filter}
        type="text"
        placeholder="Filter by name"
        value={filter}
        onChange={e => setFilter(e.target.value)}
      />
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
