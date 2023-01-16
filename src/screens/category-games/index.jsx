import {
	ActivityIndicator,
	FlatList,
	StyleSheet,
	Text,
	View,
} from 'react-native'
import React from 'react'
import { useDataFetch } from '../../hooks'
import { useSelector } from 'react-redux'
import { GameItem } from '../../components'
import { COLORS } from '../../constants'
import { StatusBar } from 'react-native'

const CategoryGames = () => {
	let category = useSelector((state) => state.games.category)

	const { info, loading } = useDataFetch(
		`https://www.freetogame.com/api/games?category=${category}`,
		category
	)

	const renderItem = ({ item }) => <GameItem game={item} />

	return (
		<View style={styles.container}>
			<Text style={styles.title}>{category} Games</Text>
			{loading ? (
				<ActivityIndicator size="large" color={COLORS.secondary} />
			) : (
				<FlatList
					data={info}
					keyExtractor={(i) => i.id.toString()}
					renderItem={renderItem}
					numColumns={2}
				/>
			)}
		</View>
	)
}

export default CategoryGames

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLORS.background,
		paddingTop: StatusBar.currentHeight,
	},
	title: {
		fontSize: 25,
		color: COLORS.secondary,
		fontWeight: 'bold',
		alignSelf: 'center',
		marginVertical: 10,
	},
})
