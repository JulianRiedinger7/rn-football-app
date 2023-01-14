import {
	FlatList,
	SafeAreaView,
	StyleSheet,
	Text,
	StatusBar,
} from 'react-native'
import React, { useEffect } from 'react'
import { COLORS } from '../../constants'
import { useSelector } from 'react-redux'
import { Favorite } from '../../components'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { setFavorites } from '../../store/gamesSlice'

const Favorites = () => {
	const favorites = useSelector((state) => state.games.favorites)

	const renderItem = ({ item }) => <Favorite game={item} />

	useEffect(() => {
		getFavoritesStorage()
	}, [favorites])

	const getFavoritesStorage = async () => {
		try {
			const value = await AsyncStorage.getItem('favorites')
			setFavorites(JSON.parse(value))
		} catch (error) {
			throw error
		}
	}

	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.title}>Favorites</Text>
			{favorites.length > 0 ? (
				<FlatList
					data={favorites}
					keyExtractor={(i) => i.id.toString()}
					renderItem={renderItem}
				/>
			) : (
				<Text style={styles.noFavorites}>No favorites yet...</Text>
			)}
		</SafeAreaView>
	)
}

export default Favorites

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLORS.background,
	},
	title: {
		fontSize: 25,
		fontWeight: 'bold',
		alignSelf: 'center',
		color: COLORS.primaryDark,
		paddingTop: StatusBar.currentHeight,
		marginVertical: 10,
	},
	noFavorites: {
		alignSelf: 'center',
		fontWeight: 'bold',
		fontSize: 16,
	},
})
