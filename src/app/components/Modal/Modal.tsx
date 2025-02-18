'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Image from 'next/image';
import styles from './Modal.module.css';

export const Modal = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  useEffect(() => {
    const closeOnEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        router.back();
      }
    };

    document.documentElement.style.overflow = 'hidden';
    document.addEventListener('keydown', closeOnEscape);

    return () => {
      document.documentElement.style.overflow = '';
      document.removeEventListener('keydown', closeOnEscape);
    };
  }, [router]);

  return (
    <div className={styles['modal-backdrop']} onClick={() => router.back()}>
      <div
        className={styles['modal-content']}
        onClick={e => e.stopPropagation()}
      >
        <button className={styles['btn-close']} onClick={() => router.back()}>
          <Image src="/icons/x.svg" alt="Close icon" width={32} height={32} />
        </button>
        {children}
      </div>
    </div>
  );
};
