import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: 'mind-health-982ab.firebaseapp.com',
  databaseURL:
    'https://mind-health-982ab-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'mind-health-982ab',
  storageBucket: 'mind-health-982ab.firebasestorage.app',
  messagingSenderId: '745463468118',
  appId: '1:745463468118:web:ea52080419d8e235c06bf7',
  measurementId: 'G-BERVQLBW1F',
};

// Ініціалізація Firebase
const app = initializeApp(firebaseConfig);

// Підключення до Authentication
const auth = getAuth(app);

// Підключення до Realtime Database
const database = getDatabase(app);

export { auth, database };
