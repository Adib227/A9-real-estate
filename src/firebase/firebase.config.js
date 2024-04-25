// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  // apiKey: import.meta.env.VITE_APIKEY,
  // authDomain: import.meta.env.VITE_AUTHDOMAIN,
  // projectId: import.meta.env.VITE_PROJECTID,
  // storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  // messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  // appId: import.meta.env.VITE_APPID,
  apiKey: 'AIzaSyC1NG7N8wsFh57R1GAdxPpxgHL95DK8uYQ',
  authDomain: 'real-estate-project1-ab628.firebaseapp.com',
  projectId: 'real-estate-project1-ab628',
  storageBucket: 'real-estate-project1-ab628.appspot.com',
  messagingSenderId: '187689751521',
  appId: '1:187689751521:web:2e290d4c75b28a6419f8a0',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
