'use client';

import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import GreenDot from '@icons/green-dot.svg';
import Star from '@icons/star.svg';
import FullHeart from '@icons/full-heart.svg';
import EmptyHeart from '@icons/empty-heart.svg';

import styles from './PsychologistCard.module.css';
import { Psychologist } from '@/types/psychologists.types';
import { PsychologistReviews } from './PsychologistReviews';
import { useAuth } from '../AuthProvider';
import { Modal } from '../Modal/Modal';
import { MakeAnAppointment } from '../MakeAnAppointmentPage/MakeAnAppointment';

type PsychologistCardProps = {
  psychologist: Psychologist;
  favorites: string[];
  setFavorites: React.Dispatch<React.SetStateAction<string[]>>;
};

export const PsychologistCard = ({
  psychologist,
  favorites,
  setFavorites,
}: PsychologistCardProps) => {
  const {
    name,
    avatar_url,
    rating,
    price_per_hour,
    id,
    experience,
    license,
    specialization,
    initial_consultation,
    about,
    reviews,
  } = psychologist;

  const { user } = useAuth();
  const router = useRouter();
  const [isfavorite, setIsFavorite] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (favorites.includes(id)) {
      setIsFavorite(true);
    }
  }, [favorites, id]);

  const toggleFavorite = () => {
    if (!user) {
      router.push('/sign-in');
      return;
    }

    let favoritesList = !favorites.includes(id)
      ? [...favorites, id]
      : favorites.filter(item => item !== id);

    if (favoritesList.length === 0) {
      favoritesList = [''];
    }

    localStorage.setItem('favorites', JSON.stringify(favoritesList));
    setFavorites(favoritesList);
    setIsFavorite(!isfavorite);
  };

  const onShowMore = () => {
    setShowAll(true);
  };

  const toggleOpenModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <div className={styles.image}>
        <Image
          src={avatar_url}
          alt="Photo of psychologist"
          width={96}
          height={96}
        />
        <Image src={GreenDot} alt="Green dot icon" />
      </div>
      <div className={styles.wrapper}>
        <div className={styles['main-info-wrapper']}>
          <div className={styles.name}>
            Psychologist
            <span>{name}</span>
          </div>
          <div className={styles.stats}>
            <Image src={Star} alt="Star icon" />
            <div className={styles.rating}>Rating: {rating}</div>
            <span>|</span>
            <div className={styles.price}>
              Price / 1 hour: <span>{price_per_hour}$</span>
            </div>
            <Image
              src={user && isfavorite ? FullHeart : EmptyHeart}
              alt={user && isfavorite ? 'Full heart icon' : 'Empty heart icon'}
              onClick={toggleFavorite}
            />
          </div>
        </div>
        <div className={styles.params}>
          <div>
            <div className={styles.block}>
              Experience: <span>{experience}</span>
            </div>
            <div className={styles.block}>
              License: <span>{license}</span>
            </div>
          </div>
          <div>
            <div className={styles.block}>
              Specialization: <span>{specialization}</span>
            </div>
            <div className={styles.block}>
              Initial_consultation: <span>{initial_consultation}</span>
            </div>
          </div>
        </div>
        <p className={styles.desc}>{about}</p>
        {showAll ? (
          <>
            <PsychologistReviews reviews={reviews} />
            <button
              suppressHydrationWarning={true}
              className={clsx(styles.button, 'btn-secondary')}
              type="button"
              onClick={toggleOpenModal}
            >
              Make an appointment
            </button>
          </>
        ) : (
          <button
            suppressHydrationWarning={true}
            type="button"
            className={styles['read-more']}
            onClick={onShowMore}
          >
            Read more
          </button>
        )}
      </div>
      {isModalOpen && (
        <Modal toggleOpenModal={toggleOpenModal}>
          <MakeAnAppointment
            toggleOpenModal={toggleOpenModal}
            psychologist={psychologist}
          />
        </Modal>
      )}
    </>
  );
};
