'use client';

import { useRouter } from 'next/navigation';
import { useAuth } from './AuthProvider';
import { useEffect } from 'react';

export const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/sign-in');
    }
  }, [loading, user, router]);

  if (!user) {
    return null;
  }

  return <>{children}</>;
};
