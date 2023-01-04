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
			const favoriteFinded = state.favorites.find(favorite => favorite.id === action.payload.id)
			if(favoriteFinded){
				state.favorites = state.favorites.filter(favorite => favorite.id !== action.payload.id)
			} else {
				state.favorites.push(action.payload)
			}
			
		}
	},
});

export const { selectGame,addToFavorites } = gamesSlice.actions;

export default gamesSlice.reducer;
