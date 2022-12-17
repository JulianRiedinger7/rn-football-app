import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Matches = () => {
	return (
		<View style={styles.container}>
			<Text>Matches</Text>
		</View>
	);
};

export default Matches;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
