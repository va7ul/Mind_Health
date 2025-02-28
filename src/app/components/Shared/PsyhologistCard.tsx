'use client';

import clsx from 'clsx';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import styles from './PsyhologistCard.module.css';
import { Psyhologist } from '@/types/psyhologists.types';
import { PsyhologistReviews } from './PsyhologistReviews';
import { useAuth } from '../AuthProvider';

type PsyhologistCardProps = {
  psyhologist: Psyhologist;
  favorites: string[];
  setFavorites: React.Dispatch<React.SetStateAction<string[]>>;
};

export const PsyhologistCard = ({
  psyhologist,
  favorites,
  setFavorites,
}: PsyhologistCardProps) => {
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
  } = psyhologist;

  const { user } = useAuth();
  const router = useRouter();
  const [isfavorite, setIsFavorite] = useState(false);
  const [showAll, setShowAll] = useState(false);

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

  return (
    <>
      <div className={styles.image}>
        <Image
          src={avatar_url}
          alt="Photo of psyhologist"
          width={96}
          height={96}
        />
        <Image
          src="/icons/green-dot.svg"
          alt="Green dot icon"
          width={14}
          height={14}
        />
      </div>
      <div className={styles.wrapper}>
        <div className={styles['main-info-wrapper']}>
          <div className={styles.name}>
            Psychologist
            <span>{name}</span>
          </div>
          <div className={styles.stats}>
            <Image
              src="/icons/star.svg"
              alt="Star icon"
              width={16}
              height={16}
            />
            <div className={styles.rating}>Rating: {rating}</div>
            <span>|</span>
            <div className={styles.price}>
              Price / 1 hour: <span>{price_per_hour}$</span>
            </div>
            <Image
              src={
                user && isfavorite
                  ? '/icons/full-heart.svg'
                  : '/icons/empty-heart.svg'
              }
              alt={user && isfavorite ? 'Full heart icon' : 'Empty heart icon'}
              width={26}
              height={26}
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
            <PsyhologistReviews reviews={reviews} />
            <button
              suppressHydrationWarning={true}
              className={clsx(styles.button, 'btn-secondary')}
              type="button"
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
    </>
  );
};
