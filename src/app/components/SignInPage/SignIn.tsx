'use client';

import clsx from 'clsx';
import styles from './SignIn.module.css';
// import { signIn } from '@/app/(server)/api';
import { useRouter } from 'next/navigation';

export const SignIn = () => {
  // const email = 'test@ukr.net';
  // const password = '123456';
  const router = useRouter();

  return (
    <div className={styles.wrapper}>
      <div className={styles['text-container']}>
        <h3>Log In</h3>
        <p>
          Welcome back! Please enter your credentials to access your account and
          continue your search for a psychologist.
        </p>
      </div>
      <button
        className={clsx(styles.button, 'btn-secondary')}
        onClick={() => {
          // signIn(email, password);
          router.back();
        }}
      >
        Log In
      </button>
    </div>
  );
};
