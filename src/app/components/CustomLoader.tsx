'use client';

import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { useEffect } from 'react';

export const CustomLoader = () => {
  useEffect(() => {
    Loading.pulse({ svgColor: 'rgb(52, 112, 255)' });
    return () => Loading.remove();
  }, []);

  return null;
};
