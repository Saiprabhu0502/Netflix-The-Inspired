import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "96096eed735fe73c045a1b90fab200e5",
  authDomain: "movie-154f4.firebaseapp.com",
  projectId: "154f4",
  // ...other config properties
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();
export { db };
