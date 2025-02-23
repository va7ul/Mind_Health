import { ref, get } from 'firebase/database';
import { database } from './firebase';

export const getPsyhologists = async () => {
  const psychologistsRef = ref(database, '/');
  // Для одноразового отримання даних:
  const snapshot = await get(psychologistsRef);

  if (!snapshot.exists()) {
    console.log('Дані не знайдено!');
    return [];
  }

  const psychologists = snapshot.val();
  return psychologists;
};

// Для постійного відстеження змін:
// onValue(psychologistsRef, snapshot => {
//   const data = snapshot.val();
//   console.log('Users:', data);
// });
