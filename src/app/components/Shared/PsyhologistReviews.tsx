import Image from 'next/image';
import { Review } from '@/types/psyhologists.types';
import styles from './PsyhologistReviews.module.css';

type PsyhologistReviewsProps = {
  reviews: Review[];
};

export const PsyhologistReviews = ({ reviews }: PsyhologistReviewsProps) => {
  return (
    <ul className={styles.reviews}>
      {reviews.map(({ comment, rating, reviewer }, index) => (
        <li key={index}>
          <div className={styles.box}>
            <div className={styles.avatar}>{reviewer.slice(0, 1)}</div>
            <div className={styles.reviewer}>
              {reviewer}
              <div className={styles.rating}>
                <Image
                  src="/icons/star.svg"
                  alt="Star icon"
                  width={16}
                  height={16}
                />
                {rating}
              </div>
            </div>
          </div>
          <p className={styles.comment}>{comment}</p>
        </li>
      ))}
    </ul>
  );
};
