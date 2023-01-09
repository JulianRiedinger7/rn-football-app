import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS } from '../../constants'
import { height, width } from '../../utils'
import { useDispatch } from 'react-redux'
import { selectCategory } from '../../store/gamesSlice'
import { useNavigation } from '@react-navigation/native'

const Category = ({ genre }) => {
	const dispatch = useDispatch()
	const navigation = useNavigation()

	const onHandlePress = () => {
		dispatch(selectCategory(genre))
		navigation.navigate('Category Games')
	}

	return (
		<TouchableOpacity style={styles.container} onPress={onHandlePress}>
			<Text style={styles.genre}>{genre}</Text>
		</TouchableOpacity>
	)
}

export default Category

const styles = StyleSheet.create({
	container: {
		backgroundColor: COLORS.secondary,
		margin: 20,
		padding: 20,
		width: width * 0.3,
		height: height * 0.14,
		alignItems: 'center',
		justifyContent: 'center',
		flex: 1,
		borderRadius: 20,
	},
	genre: {
		fontSize: 18,
		fontWeight: 'bold',
		color: COLORS.text,
	},
})
