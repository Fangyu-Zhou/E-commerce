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

//Authentication configuration
export const auth = firebase.auth();

//Google sign in configuration
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({promp: 'select_account'});

export const SignInWithGoogle = () => auth.signInWithPopup(provider);

//Database configuration
export const firestore = firebase.firestore();

//Interaction between Database and Auth
export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const {displayName, email} = userAuth;
        const createAt = new Date();

        try {
            await userRef.set({
                displayName: displayName,
                email: email,
                createAt,
                ...additionalData
            });
        } catch (e) {
            console.log('error creating user', e.message);
        }

    }

    return userRef;
}

export default firebase;

