import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDMw5n5JlfibAeNXcf6xrcBt_z21YbibBU',
  authDomain: 'crwn-db-3d5f0.firebaseapp.com',
  databaseURL: 'https://crwn-db-3d5f0.firebaseio.com',
  projectId: 'crwn-db-3d5f0',
  storageBucket: 'crwn-db-3d5f0.appspot.com',
  messagingSenderId: '39691969822',
  appId: '1:39691969822:web:08e41f86eafd26812d950f',
  measurementId: 'G-TB0BTBYZKD'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;