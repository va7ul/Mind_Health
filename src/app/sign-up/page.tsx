'use client';

import { AuthProvider } from '../components/AuthProvider';
import dynamic from 'next/dynamic';
import { RestrictedRoute } from '../components/RestrictedRoute';

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
      <RestrictedRoute>
        <Modal>
          <SignUp />
        </Modal>
      </RestrictedRoute>
    </AuthProvider>
  );
}
