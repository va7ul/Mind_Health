'use client';

import clsx from 'clsx';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Report } from 'notiflix/build/notiflix-report-aio';
import Image from 'next/image';
import styles from './MakeAnAppointment.module.css';
import { schema } from '@/lib/schemes//reservation';
import { Psychologist } from '@/types/psychologists.types';

type Inputs = {
  name: string;
  phone: string;
  time: string;
  email: string;
  comment?: string;
};

type MakeAnAppointmentProps = {
  toggleOpenModal: () => void;
  psychologist: Psychologist;
};

export const MakeAnAppointment = ({
  toggleOpenModal,
  psychologist: { name: doctorName, avatar_url },
}: MakeAnAppointmentProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      name: 'test',
      phone: '+380987654321',
      time: '00:00',
      email: 'test@ukr.net',
      comment: 'qwerty',
    },
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<Inputs> = ({
    name,
    phone,
    time,
    email,
    comment,
  }) => {
    Report.success(
      'Your order accepted',
      `Doctor: ${doctorName}<br>
      Patient: ${name}<br>
      Phone: ${phone}<br>
      Time: ${time}<br>
      Email: ${email}<br>
      Comment: ${comment}`,
      'Okay',
      { plainText: false }
    );
    toggleOpenModal();
  };

  return (
    <form className={styles.wrapper} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.container}>
        <h3>Make an appointment with a psychologists</h3>
        <p>
          You are on the verge of changing your life for the better. Fill out
          the short form below to book your personal appointment with a
          professional psychologist. We guarantee confidentiality and respect
          for your privacy.
        </p>
      </div>
      <div className={styles.box}>
        <Image
          src={avatar_url}
          alt="Photo of psychologist"
          width={44}
          height={44}
        />
        <div className={styles['content-box']}>
          <span>Your psychologist</span>
          <h4>{doctorName}</h4>
        </div>
      </div>
      <div>
        <div className={styles.container}>
          <input {...register('name')} placeholder="Name" type="text" />
          <span>{errors.name?.message}</span>
        </div>
        <div className={styles['container-wrapper']}>
          <div className={styles.container}>
            <input {...register('phone')} placeholder="+380" type="number" />
            <span>{errors.phone?.message}</span>
          </div>
          <div className={styles.container}>
            <input
              {...register('time')}
              placeholder="00:00"
              type="time"
              className={styles.time}
            />
            <span>{errors.time?.message}</span>
          </div>
        </div>
        <div className={clsx(styles.container, styles.email)}>
          <input {...register('email')} placeholder="Email" type="email" />
          <span>{errors.email?.message}</span>
        </div>
        <div className={clsx(styles.container, styles.password)}>
          <input {...register('comment')} placeholder="Comment" type="text" />
          <span>{errors.comment?.message}</span>
        </div>
      </div>
      <button
        type="submit"
        className={clsx(styles.button, 'btn-secondary')}
        suppressHydrationWarning={true}
      >
        Send
      </button>
    </form>
  );
};
