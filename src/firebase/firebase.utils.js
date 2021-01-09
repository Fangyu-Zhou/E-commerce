import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDNCZGkgCwLCUMlzo3OVrygn5yLayvb11E",
    authDomain: "e-commerce-db-b0a2d.firebaseapp.com",
    projectId: "e-commerce-db-b0a2d",
    storageBucket: "e-commerce-db-b0a2d.appspot.com",
    messagingSenderId: "763671487669",
    appId: "1:763671487669:web:7f6dc7b43ec348ac8f4afc",
    measurementId: "G-K5D647E257"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({promp: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

