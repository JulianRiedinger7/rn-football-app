import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	data: null,
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser: (state, action) => {
			state.data = action.payload;
		},
		changeUsernameAndPhoto: (state, action) => {
			state.data.photoURL = action.payload.photo
			state.data.displayName = action.payload.username
		}
	},
});

export const { setUser, changeUsernameAndPhoto } = userSlice.actions;

export default userSlice.reducer;
