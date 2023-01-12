import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	data: null,
}

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser: (state, action) => {
			state.data = action.payload
		},
		changeUserProfile: (state, action) => {
			state.data.photoURL = action.payload.photo
			state.data.displayName = action.payload.username
			state.data.location = action.payload.location
		},
	},
})

export const { setUser, changeUserProfile } = userSlice.actions

export default userSlice.reducer
