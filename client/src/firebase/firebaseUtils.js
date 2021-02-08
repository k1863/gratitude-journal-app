import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyAxFhkXh7LQp9inqMEqfmT09IYQC9ItLYs",
  authDomain: "coruja-db.firebaseapp.com",
  databaseURL: "https://coruja-db.firebaseio.com",
  projectId: "coruja-db",
  storageBucket: "coruja-db.appspot.com",
  messagingSenderId: "701876962423",
  appId: "1:701876962423:web:3e7df959919642a33ef272",
  measurementId: "G-1BCBH1Z01G",
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
