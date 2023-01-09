import {
	ActivityIndicator,
	FlatList,
	SafeAreaView,
	StyleSheet,
	Text,
} from 'react-native'
import React, { useEffect, useState } from 'react'
import { COLORS } from '../../constants'
import { useDataFetch } from '../../hooks'
import { StatusBar } from 'react-native'
import { Category } from '../../components'

const Categories = () => {
	const { info, loading } = useDataFetch('https://www.freetogame.com/api/games')
	const [categories, setCategories] = useState([])

	useEffect(() => {
		const genresDuplicates = info.map((game) => game.genre.trim())
		const noDuplicates = genresDuplicates.filter(
			(game, index) => genresDuplicates.indexOf(game) === index
		)

		setCategories(noDuplicates)
	}, [loading])

	const renderItem = ({ item }) => <Category genre={item} />

	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.title}>Categories</Text>
			{loading ? (
				<ActivityIndicator size="large" color={COLORS.primary} />
			) : (
				<FlatList
					data={categories}
					renderItem={renderItem}
					keyExtractor={(i) => i}
					numColumns={2}
				/>
			)}
		</SafeAreaView>
	)
}

export default Categories

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLORS.background,
		paddingTop: StatusBar.currentHeight,
	},
	title: {
		marginVertical: 10,
		fontSize: 25,
		fontWeight: 'bold',
		alignSelf: 'center',
		color: COLORS.primaryDark,
	},
})
