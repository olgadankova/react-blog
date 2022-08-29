import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: process.REACT_APP_API_KEY,
    authDomain: process.REACT_APP_AUTH_DOMAIN,
    projectId: process.REACT_APP_PROJECT_ID,
    storageBucket: process.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.REACT_APP_APP_ID
};

// eslint-disable-next-line no-unused-vars
const app = initializeApp(firebaseConfig);