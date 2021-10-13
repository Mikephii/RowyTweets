import * as firebase from "firebase/app";
import { getAuth } from "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyCrGxkTU_YrpFW7_U7D8mHHSqGgM7TDLLY",
  authDomain: "rowytweets.firebaseapp.com",
  projectId: "rowytweets",
  storageBucket: "rowytweets.appspot.com",
  messagingSenderId: "317086881256",
  appId: "1:317086881256:web:64ff2c6e8e43fd9407405d",
  measurementId: "G-P1Q9JF2R4F",
});

export const auth = getAuth(app);
export default app;
