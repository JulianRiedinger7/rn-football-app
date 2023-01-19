import React, { useEffect } from 'react'
import {
	Button,
	FlatList,
	SafeAreaView,
	StatusBar,
	StyleSheet,
	Text,
	View,
} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { Favorite } from '../../components'
import { COLORS } from '../../constants'
import { clean, init } from '../../db'
import { loadFavorites, setFavorites } from '../../store/gamesSlice'

const Favorites = () => {
	const favorites = useSelector((state) => state.games.favorites)
	const dispatch = useDispatch()

	const renderItem = ({ item }) => <Favorite game={item} />

	useEffect(() => {
		dispatch(loadFavorites())
	}, [])

	const onHandleRemoveAll = async () => {
		dispatch(setFavorites([]))
		await clean()
		await init()
	}

	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.title}>Favorites</Text>
			{favorites.length > 0 ? (
				<>
					<FlatList
						data={favorites}
						keyExtractor={(i) => i.id.toString()}
						renderItem={renderItem}
					/>
					<View style={styles.buttonContainer}>
						<Button
							title="Remove All"
							color={COLORS.tertiary}
							onPress={onHandleRemoveAll}
						/>
					</View>
				</>
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
	buttonContainer: {
		alignSelf: 'flex-end',
		marginBottom: 20,
		marginRight: 20,
	},
})
