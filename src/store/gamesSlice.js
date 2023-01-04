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
		addToFavorites: (state, action) => {
			state.favorites.push(action.payload)
		}
	},
});

export const { selectGame,addToFavorites } = gamesSlice.actions;

export default gamesSlice.reducer;
