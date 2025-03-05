import { ref, get } from 'firebase/database';
import { database } from './firebase';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export const getPsychologists = async () => {
  const psychologistsRef = ref(database, '/');
  const snapshot = await get(psychologistsRef);

  if (!snapshot.exists()) {
    Notify.failure('Data not found');
    return [];
  }

  const psychologists = snapshot.val();
  return psychologists;
};
