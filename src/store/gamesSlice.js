import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	selected: null,
	favorites: [],
	category: null,
}

const gamesSlice = createSlice({
	name: 'games',
	initialState,
	reducers: {
		selectGame: (state, action) => {
			state.selected = action.payload
		},
		changeFavorites: (state, action) => {
			const favoriteFinded = state.favorites.find(
				(favorite) => favorite.id === action.payload.id
			)
			if (favoriteFinded) {
				state.favorites = state.favorites.filter(
					(favorite) => favorite.id !== action.payload.id
				)
			} else {
				state.favorites.push(action.payload)
			}
		},
		selectCategory: (state, action) => {
			state.category = action.payload
		},
		setFavorites: (state, action) => {
			state.favorites = action.payload
		},
	},
})

export const { selectGame, changeFavorites, selectCategory, setFavorites } =
	gamesSlice.actions

export default gamesSlice.reducer
