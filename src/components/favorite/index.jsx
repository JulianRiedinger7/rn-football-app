import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../constants'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import { selectGame } from '../../store/gamesSlice'

const Favorite = ({ game }) => {
	const navigation = useNavigation()
	const dispatch = useDispatch()

	const onHandlePress = () => {
		dispatch(selectGame(game))
		navigation.navigate('Detail')
	}

	return (
		<TouchableOpacity style={styles.container} onPress={onHandlePress}>
			<View style={styles.leftContainer}>
				<Image source={{ uri: game.thumbnail }} style={styles.image} />
			</View>
			<View style={styles.rightContainer}>
				<Text style={styles.title}>{game.title}</Text>
				<Text style={styles.info}>Genre: {game.genre}</Text>
				<Text style={styles.info}>Platform: {game.platform}</Text>
			</View>
		</TouchableOpacity>
	)
}

export default Favorite

const styles = StyleSheet.create({
	container: {
		margin: 20,
		paddingBottom: 15,
		flexDirection: 'row',
		borderBottomWidth: 1,
		borderBottomColor: COLORS.primary,
	},
	leftContainer: {
		marginRight: 20,
	},
	image: {
		width: 200,
		height: 150,
		resizeMode: 'contain',
	},
	rightContainer: {
		justifyContent: 'space-around',
		flexShrink: 1,
	},
	title: {
		fontSize: 21,
		fontWeight: 'bold',
		color: COLORS.secondaryDark,
	},
	info: {
		fontSize: 14,
		fontWeight: '600',
	},
})
