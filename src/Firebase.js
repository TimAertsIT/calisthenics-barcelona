import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCzoqCWg6-4eqavpZvzAB_xJeYwQ3cKGMQ",
    authDomain: "calisthenics-barcelona.firebaseapp.com",
    projectId: "calisthenics-barcelona",
    storageBucket: "calisthenics-barcelona.appspot.com",
    messagingSenderId: "804554220033",
    appId: "1:804554220033:web:7e6cc4e2670c88c9ba9600",
    measurementId: "G-1G0DJ4K587"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();

export { db, auth };


