import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyAPk8SlUliLaQ0n2N0K0ECzkmA6doYcjRQ",
  authDomain: "gratitude-journal-app-f8368.firebaseapp.com",
  projectId: "gratitude-journal-app-f8368",
  storageBucket: "gratitude-journal-app-f8368.appspot.com",
  messagingSenderId: "1005093050573",
  appId: "1:1005093050573:web:9e9c0fb9e4af96d685f184",
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log(error.message, "error creating user");
    }
  }
  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
