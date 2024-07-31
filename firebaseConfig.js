// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";

// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCP51t5v31JHpSN5wKA0zUpWP_vZVi_8ds",
//   authDomain: "next-a8987.firebaseapp.com",
//   projectId: "next-a8987",
//   storageBucket: "next-a8987.appspot.com",
//   messagingSenderId: "566218828502",
//   appId: "1:566218828502:web:f6ccb692a09335f455f777",
//   measurementId: "G-9DDXY5207H"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkSYeKleIAgsQZ2Zv1D5FriAO9d6EbQZc",
  authDomain: "harman-ba8c5.firebaseapp.com",
  projectId: "harman-ba8c5",
  storageBucket: "harman-ba8c5.appspot.com",
  messagingSenderId: "289128580767",
  appId: "1:289128580767:web:77d5a40e6b88450c11c4aa",
  measurementId: "G-6G9HECJ97T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export {analytics};
