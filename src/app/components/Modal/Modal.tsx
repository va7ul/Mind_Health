'use client';

import { useEffect, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import styles from './Modal.module.css';

type ModalProps = {
  children: React.ReactNode;
  toggleOpenModal?: () => void;
};

export const Modal = ({ children, toggleOpenModal }: ModalProps) => {
  const router = useRouter();

  const handleClose = useMemo(
    () => toggleOpenModal || (() => router.back()),
    [toggleOpenModal, router]
  );

  useEffect(() => {
    const closeOnEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };

    document.documentElement.style.overflow = 'hidden';
    document.addEventListener('keydown', closeOnEscape);

    return () => {
      document.documentElement.style.overflow = '';
      document.removeEventListener('keydown', closeOnEscape);
    };
  }, [handleClose]);

  return (
    <div
      suppressHydrationWarning={true}
      className={styles['modal-backdrop']}
      onClick={handleClose}
    >
      <div
        suppressHydrationWarning={true}
        className={styles['modal-content']}
        onClick={e => e.stopPropagation()}
      >
        <button
          suppressHydrationWarning={true}
          className={styles['btn-close']}
          onClick={handleClose}
        >
          <Image src="/icons/x.svg" alt="Close icon" width={32} height={32} />
        </button>
        {children}
      </div>
    </div>
  );
};
