'use client';

import clsx from 'clsx';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Image from 'next/image';
import styles from './SignIn.module.css';
import { schema } from '@/lib/schemes/login';
import { useAuth } from '../AuthProvider';

type Inputs = {
  email: string;
  password: string;
};

export const SignIn = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const { signIn } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      email: 'test@ukr.net',
      password: '123456',
    },
    resolver: yupResolver(schema),
  });

  const onShow = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit: SubmitHandler<Inputs> = ({ email, password }) => {
    signIn(email, password);
    router.back();
  };

  return (
    <form className={styles.wrapper} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.container}>
        <h3>Log In</h3>
        <p>
          Welcome back! Please enter your credentials to access your account and
          continue your search for a psychologist.
        </p>
      </div>
      <div>
        <div className={styles.container}>
          <input {...register('email')} placeholder="Email" />
          <span>{errors.email?.message}</span>
        </div>
        <div className={clsx(styles.container, styles.password)}>
          <input
            {...register('password')}
            placeholder="Password"
            type={showPassword ? 'text' : 'password'}
          />
          <Image
            src={showPassword ? '/icons/eye-off.svg' : '/icons/eye.svg'}
            alt={showPassword ? 'Open eye icon' : 'Close eye icon'}
            width={20}
            height={20}
            onClick={onShow}
          />
          <span>{errors.password?.message}</span>
        </div>
      </div>
      <button type="submit" className={clsx(styles.button, 'btn-secondary')}>
        Log In
      </button>
    </form>
  );
};
