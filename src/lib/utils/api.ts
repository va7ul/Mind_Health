import { ref, get } from 'firebase/database';
import { database } from './firebase';

export const getPsyhologists = async () => {
  const psychologistsRef = ref(database, '/');
  const snapshot = await get(psychologistsRef);

  if (!snapshot.exists()) {
    console.log('Дані не знайдено!');
    return [];
  }

  const psychologists = snapshot.val();
  return psychologists;
};
