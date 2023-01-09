import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux'
import { selectGame } from '../../store/gamesSlice'
import { useNavigation } from '@react-navigation/native'
import { width, height } from '../../utils'

const GameItem = ({ game }) => {
	const { title, thumbnail } = game || {}
	const dispatch = useDispatch()
	const navigation = useNavigation()

	const onHandleSelect = () => {
		dispatch(selectGame(game))
		navigation.navigate('Detail')
	}

	return (
		<TouchableOpacity style={styles.itemContainer} onPress={onHandleSelect}>
			<Text style={styles.itemTitle}>{title}</Text>
			<Image source={{ uri: thumbnail }} style={styles.image} />
		</TouchableOpacity>
	)
}

export default GameItem

const styles = StyleSheet.create({
	image: {
		width: width * 0.43,
		height: height * 0.17,
		borderRadius: 30,
		resizeMode: 'contain',
	},
	itemContainer: {
		padding: 20,
		flex: 1,
	},
	itemTitle: {
		flex: 1,
		fontSize: 16,
		fontWeight: 'bold',
	},
})
