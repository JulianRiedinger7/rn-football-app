import {
	FlatList,
	SafeAreaView,
	StyleSheet,
	Text,
	StatusBar,
} from 'react-native'
import React from 'react'
import { COLORS } from '../../constants'
import { useSelector } from 'react-redux'
import { Favorite } from '../../components'

const Favorites = () => {
	const favorites = useSelector((state) => state.games.favorites)

	const renderItem = ({ item }) => <Favorite game={item} />

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
