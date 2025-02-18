import clsx from 'clsx';
import Image from 'next/image';
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
          Get started
          <Image
            src="/icons/arrow.svg"
            alt="Arrow sign"
            width={14}
            height={14}
          />
        </button>
      </div>
      <div className={styles.thumb}>
        <div className={styles['question-container']}>
          <Image
            src="/icons/question.svg"
            alt="Question sign"
            width={10}
            height={17}
          />
        </div>
        <Image
          src="/icons/people.svg"
          alt="Question sign"
          width={48}
          height={48}
          className={styles['people-svg']}
        />
        <Image
          src="/images/main_image.jpeg"
          alt="Photo of phychologist"
          width={464}
          height={526}
          style={{ borderRadius: '10px' }}
        />
        <div className={styles.block}>
          <div className={styles['check-container']}>
            <Image
              src="/icons/check.svg"
              alt="Check sign"
              width={30}
              height={30}
            />
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
