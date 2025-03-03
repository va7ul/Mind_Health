import Image from 'next/image';
import Star from '@icons/star.svg';
import { Review } from '@/types/psychologists.types';
import styles from './PsychologistReviews.module.css';

type PsychologistReviewsProps = {
  reviews: Review[];
};

export const PsychologistReviews = ({ reviews }: PsychologistReviewsProps) => {
  return (
    <ul className={styles.reviews}>
      {reviews.map(({ comment, rating, reviewer }, index) => (
        <li key={index}>
          <div className={styles.box}>
            <div className={styles.avatar}>{reviewer.slice(0, 1)}</div>
            <div className={styles.reviewer}>
              {reviewer}
              <div className={styles.rating}>
                <Image src={Star} alt="Star icon" />
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
