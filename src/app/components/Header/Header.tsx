'use client';

import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import styles from './Header.module.css';
import { NavLink } from './NavLink';

export const Header = () => {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        psychologists.
        <span>services</span>
      </div>
      <ul className={styles.nav}>
        <NavLink pathname="/">Home</NavLink>
        <NavLink
          pathname="/psychologists"
          current={pathname === '/psychologists'}
        >
          Psychologists
        </NavLink>
        <NavLink pathname="/favorites" current={pathname === '/favorites'}>
          Favorites
        </NavLink>
      </ul>
      {true ? (
        <div className={styles.auth}>
          <button className={clsx(styles.button, 'btn-primary')}>Log In</button>
          <button className={clsx(styles.button, 'btn-secondary')}>
            Registration
          </button>
        </div>
      ) : (
        <div className={styles.box}>
          <div className={styles.profile}>
            <Image
              src="/icons/profile.svg"
              alt="Profile icon"
              width={40}
              height={40}
            />
            <span>Ilona</span>
          </div>
          <button className={clsx(styles.button, 'btn-primary')}>
            Log Out
          </button>
        </div>
      )}
    </header>
  );
};
