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
  measurementId: "G-TXSKM15E02",
};

firebase.initializeApp(firebaseConfig);

export type firebaseType = firebase.app.App
export type dbType = firebase.firestore.Firestore
export type firebaseDocumentType = firebase.firestore.DocumentReference
export type firebaseTimeStampType = firebase.firestore.Timestamp
export type firebaseUserType = firebase.User

export const anonymousLogin = async (firebase: firebaseType): Promise<void | { errorCode: string, errorMessage: string }> => {
  await firebase.auth().signInAnonymously().catch(function (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    return {errorCode, errorMessage}
  });
  return
}

export const firebaseLogout = async (firebase: firebaseType): Promise<void> => {
  await firebase.auth().signOut()
}

export const getTimeStamp = (): firebaseTimeStampType => {
  return firebase.firestore.Timestamp.now()
}

export const getFirebaseDocuments = async (collectionPath: string, documentPath: string): Promise<firebaseDocumentType> => {
  return (await db.collection(collectionPath).doc(documentPath))
}

export const getCurrentUser = (firebase: firebaseType): firebaseUserType | null => {
  return firebase.auth().currentUser;
}

export default firebase;
export const db = firebase.firestore();
