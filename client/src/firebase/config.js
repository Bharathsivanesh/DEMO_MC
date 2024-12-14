import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDQPLfoTy_iFICQmHwVilykVG-XN14Q0ng",
  authDomain: "motren-app-c5f17.firebaseapp.com",
  projectId: "motren-app-c5f17",
  storageBucket: "motren-app-c5f17.firebasestorage.app",
  messagingSenderId: "264737494706",
  appId: "1:264737494706:web:26c4112c3ee8b564305bab",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
