import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBuwg05ITPTgy7rSifD9bFD7CvxXTXW4dk",
  authDomain: "invoices-b1831.firebaseapp.com",
  databaseURL:
    "https://invoices-b1831-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "invoices-b1831",
  storageBucket: "invoices-b1831.appspot.com",
  messagingSenderId: "1013162211374",
  appId: "1:1013162211374:web:c8f4a033e3b20c3b4207bf",
};

export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
