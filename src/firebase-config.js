import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCtjMd-OpZ-AXOLFCXf_jE6aPiiiRa_U4g", //better to use a 
    authDomain: "fir-crud-6c380.firebaseapp.com",
    projectId: "fir-crud-6c380",
    storageBucket: "fir-crud-6c380.appspot.com",
    messagingSenderId: "644063576275",
    appId: "1:644063576275:web:140f92d510959242a1d426",
    measurementId: "G-YXMT185NYT"
  };

  const app = initializeApp(firebaseConfig);

  export const db = getFirestore(app);
  