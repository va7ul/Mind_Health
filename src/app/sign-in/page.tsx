'use client';
import { AuthProvider } from '../components/AuthProvider';
import dynamic from 'next/dynamic';

const Modal = dynamic(
  () => import('@/app/components/Modal/Modal').then(mod => mod.Modal),
  {
    ssr: false,
  }
);

const SignIn = dynamic(
  () => import('../components/SignInPage/SignIn').then(mod => mod.SignIn),
  {
    ssr: false,
  }
);

export default function Page() {
  return (
    <AuthProvider>
      <Modal>
        <SignIn />
      </Modal>
    </AuthProvider>
  );
}
