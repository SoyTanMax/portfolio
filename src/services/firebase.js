import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
    authDomain: "portfolio-b4d09.firebaseapp.com",
    projectId: "portfolio-b4d09",
    storageBucket: "portfolio-b4d09.appspot.com",
    messagingSenderId: "701212409683",
    appId: "1:701212409683:web:ccc010d57bc58fbd392ba6",
    measurementId: "G-FGT72W5KBJ"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db}