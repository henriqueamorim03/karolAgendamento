import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAjHNMDhgvbUnp_1n_8zpve19ZM7Jmks5c",
  authDomain: "karol-agendamento-627bb.firebaseapp.com",
  projectId: "karol-agendamento-627bb",
  storageBucket: "karol-agendamento-627bb.firebasestorage.app",
  messagingSenderId: "867545984803",
  appId: "1:867545984803:web:56cb453c92b200e1432696"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export { db };