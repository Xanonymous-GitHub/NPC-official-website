import * as firebase from "firebase/app";

import "firebase/auth";
import "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCHoowBhRlMjmeZ8DZ5kdE7mRjdQaeB56U",
  authDomain: "npc-official-site.firebaseapp.com",
  databaseURL: "https://npc-official-site.firebaseio.com",
  projectId: "npc-official-site",
  storageBucket: "npc-official-site.appspot.com",
  messagingSenderId: "884659801390",
  appId: "1:884659801390:web:1c69cdcf4ceffdc9837ebf",
  measurementId: "G-TXSKM15E02"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
