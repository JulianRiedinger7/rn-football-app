import {
	ActivityIndicator,
	FlatList,
	SafeAreaView,
	StyleSheet,
	Text,
} from 'react-native'
import React from 'react'
import { CATEGORIES, COLORS } from '../../constants'
import { StatusBar } from 'react-native'
import { Category } from '../../components'

const Categories = () => {
	const renderItem = ({ item }) => <Category genre={item} />

	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.title}>Categories</Text>

			<FlatList
				data={CATEGORIES}
				renderItem={renderItem}
				keyExtractor={(i) => i}
				numColumns={2}
			/>
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
