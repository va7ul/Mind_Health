'use client';

import clsx from 'clsx';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';
import styles from './Header.module.css';
import { NavLink } from './NavLink';
import { useAuth } from '../AuthProvider';

export const Header = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { user, logOut } = useAuth();

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
        {user && (
          <NavLink pathname="/favorites" current={pathname === '/favorites'}>
            Favorites
          </NavLink>
        )}
      </ul>
      {user ? (
        <div className={styles.box}>
          <div className={styles.profile}>
            <Image
              src="/icons/profile.svg"
              alt="Profile icon"
              width={40}
              height={40}
            />
            <span>{user.displayName}</span>
          </div>
          <button
            className={clsx(styles.button, 'btn-primary')}
            onClick={logOut}
          >
            Log Out
          </button>
        </div>
      ) : (
        <div className={styles.auth}>
          <button
            className={clsx(styles.button, 'btn-primary')}
            onClick={() => router.push('/sign-in')}
          >
            Log In
          </button>
          <button
            className={clsx(styles.button, 'btn-secondary')}
            onClick={() => router.push('/sign-up')}
          >
            Registration
          </button>
        </div>
      )}
    </header>
  );
};
