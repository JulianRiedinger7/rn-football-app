import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { COLORS } from '../../constants';

const Favorites = () => {
	return (
		<View style={styles.container}>
			<Text>Favorites</Text>
		</View>
	);
};

export default Favorites;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: COLORS.background,
	},
});
