import firebase, { initializeApp } from 'firebase/app';
import Constants from 'expo-constants';

// Initialize Firebase
export const firebaseConfig = {
  apiKey: Constants!.manifest!.extra!.apiKey,
  authDomain: Constants!.manifest!.extra!.authDomain,
  projectId: Constants!.manifest!.extra!.projectId,
  storageBucket: Constants!.manifest!.extra!.storageBucket,
  messagingSenderId: Constants!.manifest!.extra!.messagingSenderId,
  appId: Constants!.manifest!.extra!.appId,
  measurementId: Constants!.manifest!.extra!.measurementId,
};

export const app = initializeApp(firebaseConfig);
