import { ref, get } from 'firebase/database';
import { database } from './firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  getAuth,
  signOut,
} from 'firebase/auth';

const auth = getAuth();

export const signUp = async (email: string, password: string) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    const user = userCredential.user;

    if (user?.uid) {
      localStorage.setItem('user', JSON.stringify(user));
    }
  } catch (error) {
    console.error(error);
  }
};

export const signIn = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    const user = userCredential.user;

    if (user?.uid) {
      localStorage.setItem('user', JSON.stringify(user));
    }
  } catch (error) {
    console.error(error);
  }
};

export const refreshUser = async () => {
  onAuthStateChanged(auth, user => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;
      // ...
    } else {
      // User is signed out
      // ...
    }
  });
};

export const logOut = async () => {
  try {
    await signOut(auth);
    localStorage.removeItem('user');
  } catch (error) {
    console.error(error);
  }
};

export const getPsyhologists = async () => {
  const psychologistsRef = ref(database, '/');
  // Для одноразового отримання даних:
  const snapshot = await get(psychologistsRef);

  if (snapshot.exists()) {
    return snapshot.val();
  } else {
    console.log('Дані не знайдено!');
    return [];
  }
};

// Для постійного відстеження змін:
// onValue(psychologistsRef, snapshot => {
//   const data = snapshot.val();
//   console.log('Users:', data);
// });
