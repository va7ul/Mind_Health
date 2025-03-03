import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import Arrow from '@icons/arrow.svg';
import Question from '@icons/question.svg';
import People from '@icons/people.svg';
import Check from '@icons/check.svg';
import Photo from '@images/main_image.jpeg';
import styles from './MainPage.module.css';

export const MainPage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          The road to the <span>depths</span> of the human soul
        </h1>
        <p className={styles.text}>
          We help you to reveal your potential, overcome challenges and find a
          guide in your own life with the help of our experienced psychologists.
        </p>
        <button className={clsx(styles.button, 'btn-secondary')}>
          <Link href="/psychologists">
            Get started
            <Image src={Arrow} alt="Arrow sign" />
          </Link>
        </button>
      </div>
      <div className={styles.thumb}>
        <div className={styles['question-container']}>
          <Image src={Question} alt="Question sign" />
        </div>
        <Image
          src={People}
          alt="Question sign"
          className={styles['people-svg']}
        />
        <Image
          src={Photo}
          alt="Photo of phychologist"
          width={464}
          height={526}
          style={{ borderRadius: '10px' }}
          placeholder="blur"
        />
        <div className={styles.block}>
          <div className={styles['check-container']}>
            <Image src={Check} alt="Check sign" />
          </div>
          <p>
            Experienced psychologists
            <span>15,000</span>
          </p>
        </div>
      </div>
      <div className={styles.gradient}></div>
    </div>
  );
};
