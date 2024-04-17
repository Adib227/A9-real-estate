// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCc8CKwuBkuyzxhN9bsAQc40oeKeL6O1cc',
  authDomain: 'real-estate-project-589a7.firebaseapp.com',
  projectId: 'real-estate-project-589a7',
  storageBucket: 'real-estate-project-589a7.appspot.com',
  messagingSenderId: '795837636380',
  appId: '1:795837636380:web:038374549baeeb34b964d9',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
