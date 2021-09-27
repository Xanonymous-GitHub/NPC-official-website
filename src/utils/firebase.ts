import firebase from "firebase/app";

import {getAuth, signInAnonymously, signOut} from "firebase/auth";
import type {User, Auth} from "firebase/auth"

import {getFirestore, Timestamp, collection, doc, getDoc, setDoc} from "firebase/firestore";
import type {Firestore, DocumentSnapshot} from "firebase/firestore"

const firebaseConfig: firebase.FirebaseOptions = {
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

export const auth = getAuth();
export const db = getFirestore();

export type firebaseType = firebase.FirebaseApp
export type dbType = Firestore
export type authType = Auth
export type firebaseDocumentType = DocumentSnapshot
export type firebaseTimeStampType = Timestamp
export type firebaseUserType = User

export const anonymousLogin = async (): Promise<void | { errorCode: string, errorMessage: string }> => {
  await signInAnonymously(auth).catch(function (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    return {errorCode, errorMessage}
  });
  return
}

export const firebaseLogout = async (): Promise<void> => {
  await signOut(auth)
}

export const getTimeStamp = (): firebaseTimeStampType => {
  return Timestamp.now()
}

export const getFirebaseDocument = async (collectionPath: string, documentPath: string): Promise<DocumentSnapshot> => {
  return await getDoc(doc(collection(db, collectionPath), documentPath))
}

export async function setFirebaseDocument<T>(collectionPath: string, documentPath: string, data: T): Promise<void> {
  return await setDoc(doc(collection(db, collectionPath), documentPath), data)
}

export const getCurrentUser = (): firebaseUserType | null => {
  return auth.currentUser;
}

export default firebase;
