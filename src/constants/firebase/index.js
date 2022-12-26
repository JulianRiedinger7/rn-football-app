// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyB_pKUm-1m0vpQoUAuYeAUd25m0Wwf9hVg',
	authDomain: 'rn-freegames-app.firebaseapp.com',
	projectId: 'rn-freegames-app',
	storageBucket: 'rn-freegames-app.appspot.com',
	messagingSenderId: '458753979589',
	appId: '1:458753979589:web:3886da4cc58fe7d3cb6cac',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
