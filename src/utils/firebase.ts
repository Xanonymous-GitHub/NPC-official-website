import firebase from "firebase";

import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDH1QcPwg_hRWdMsM71o196lJfqVPOGkDA",
  authDomain: "npc-services.firebaseapp.com",
  databaseURL: "https://npc-services.firebaseio.com",
  projectId: "npc-services",
  storageBucket: "npc-services.appspot.com",
  messagingSenderId: "1066770074136",
  appId: "1:1066770074136:web:77a173cc88d74a5e88916d",
  measurementId: "G-FMS1QWREN7"
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
