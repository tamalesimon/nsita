import firebase from 'firebase/app';
import               'firebase/firestore';
import               'firebase/auth';

const Config = {
    apiKey           : "AIzaSyAP7A25tEvWT6JBg2oEyldzBPiCqhGAMiw",
    authDomain       : "nsita-db.firebaseapp.com",
    databaseURL      : "https://nsita-db.firebaseio.com",
    projectId        : "nsita-db",
    storageBucket    : "nsita-db.appspot.com",
    messagingSenderId: "868773298958",
    appId            : "1:868773298958:web:6ecf26b0a61225139b4d5f",
    measurementId    : "G-B1RR5K8VMD"
};

firebase.initializeApp(Config);

export const createUserProfileDocument = async (userAuth, additionalData) => {

    if(!userAuth) return;
    
    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists){

        const { displayName, email} = userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;

};



export const auth = firebase.auth ();
export const firestore = firebase.firestore ();

const provider = new firebase.auth.GoogleAuthProvider ();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup (provider);

export default firebase;