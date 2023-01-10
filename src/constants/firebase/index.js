import { initializeApp } from 'firebase/app'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {
	initializeAuth,
	getReactNativePersistence,
} from 'firebase/auth/react-native'

const firebaseConfig = {
	apiKey: 'AIzaSyB_pKUm-1m0vpQoUAuYeAUd25m0Wwf9hVg',
	authDomain: 'rn-freegames-app.firebaseapp.com',
	projectId: 'rn-freegames-app',
	storageBucket: 'rn-freegames-app.appspot.com',
	messagingSenderId: '458753979589',
	appId: '1:458753979589:web:3886da4cc58fe7d3cb6cac',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = initializeAuth(app, {
	persistence: getReactNativePersistence(AsyncStorage),
})
