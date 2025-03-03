'use client';

import clsx from 'clsx';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Image from 'next/image';
import EyeOff from '@icons/eye-off.svg';
import Eye from '@icons/eye.svg';
import styles from './SignUp.module.css';
import { schema } from '@/lib/schemes/register';
import { useAuth } from '../AuthProvider';

type Inputs = {
  name: string;
  email: string;
  password: string;
};

export const SignUp = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const { signUp } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      name: 'test',
      email: 'test@ukr.net',
      password: '123456',
    },
    resolver: yupResolver(schema),
  });

  const onShow = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit: SubmitHandler<Inputs> = ({ name, email, password }) => {
    signUp(name, email, password);
    router.back();
  };

  return (
    <form className={styles.wrapper} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.container}>
        <h3>Registration</h3>
        <p>
          Thank you for your interest in our platform! In order to register, we
          need some information. Please provide us with the following
          information.
        </p>
      </div>
      <div>
        <div className={styles.container}>
          <input {...register('name')} placeholder="Name" />
          <span>{errors.name?.message}</span>
        </div>
        <div className={clsx(styles.container, styles.email)}>
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
            src={showPassword ? EyeOff : Eye}
            alt={showPassword ? 'Open eye icon' : 'Close eye icon'}
            onClick={onShow}
          />
          <span>{errors.password?.message}</span>
        </div>
      </div>
      <button type="submit" className={clsx(styles.button, 'btn-secondary')}>
        Sign Up
      </button>
    </form>
  );
};
