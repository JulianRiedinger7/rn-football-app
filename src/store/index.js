import { configureStore } from '@reduxjs/toolkit';
import gamesSlice from './gamesSlice';
import userSlice from './userSlice';

export const store = configureStore({
	reducer: {
		user: userSlice,
		games: gamesSlice,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({ serializableCheck: false }),
});
