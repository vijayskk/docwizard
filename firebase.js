import firebase from 'firebase'




const firebaseConfig = {
    apiKey: "AIzaSyBNUb9T-D7a9GaP7HeooC71WMaEqZ_7uys",
    authDomain: "docwizard-76253.firebaseapp.com",
    projectId: "docwizard-76253",
    storageBucket: "docwizard-76253.appspot.com",
    messagingSenderId: "287997131005",
    appId: "1:287997131005:web:023e9c60b32db512162694"
  };

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()

export const db = app.firestore()