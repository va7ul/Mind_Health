'use client';

import { AuthProvider } from '../components/AuthProvider';
import dynamic from 'next/dynamic';

const Modal = dynamic(
  () => import('@/app/components/Modal/Modal').then(mod => mod.Modal),
  {
    ssr: false,
  }
);

const SignUp = dynamic(
  () => import('../components/SignUpPage/SignUp').then(mod => mod.SignUp),
  {
    ssr: false,
  }
);

export default function Page() {
  return (
    <AuthProvider>
      <Modal>
        <SignUp />
      </Modal>
    </AuthProvider>
  );
}
