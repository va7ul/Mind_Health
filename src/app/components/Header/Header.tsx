'use client';

import clsx from 'clsx';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';
import styles from './Header.module.css';
import { NavLink } from './NavLink';
import { signUp, signIn, logOut } from '@/app/(server)/api';
import { useState } from 'react';

export const Header = () => {
  const pathname = usePathname();
  const router = useRouter();

  const email = 'test@ukr.net';
  const password = '123456';

  const [user, setUser] = useState({});

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
          <button
            className={clsx(styles.button, 'btn-primary')}
            onClick={() => router.push('/sign-in')}
          >
            Log In
          </button>
          <button
            className={clsx(styles.button, 'btn-secondary')}
            onClick={() => signUp(email, password)}
          >
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
          <button
            className={clsx(styles.button, 'btn-primary')}
            onClick={logOut}
          >
            Log Out
          </button>
        </div>
      )}
    </header>
  );
};
