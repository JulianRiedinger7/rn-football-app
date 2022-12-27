import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	selected: null,
	favorites: [],
};

const gamesSlice = createSlice({
	name: 'games',
	initialState,
	reducers: {
		selectGame: (state, action) => {
			state.selected = action.payload;
		},
	},
});

export const { selectGame } = gamesSlice.actions;

export default gamesSlice.reducer;
