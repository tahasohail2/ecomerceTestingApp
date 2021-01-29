import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD23cneeQFV0GxuuW5ncRAZixDXJgWyHxY",
    authDomain: "testingexpoapp.firebaseapp.com",
    projectId: "testingexpoapp",
    storageBucket: "testingexpoapp.appspot.com",
    messagingSenderId: "162893807624",
    appId: "1:162893807624:web:cd82b68aef5e217e6d51bd"
})

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export {db, auth, storage};