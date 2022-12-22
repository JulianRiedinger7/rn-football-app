import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';

const GameItem = ({ title, thumbnail }) => {
	return (
		<TouchableOpacity style={styles.itemContainer}>
			<Text style={styles.itemTitle}>{title}</Text>
			<Image source={{ uri: thumbnail }} style={styles.image} />
		</TouchableOpacity>
	);
};

export default GameItem;

const styles = StyleSheet.create({
	image: {
		width: '100%',
		height: 180,
		borderRadius: 30,
		resizeMode: 'cover',
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
});
