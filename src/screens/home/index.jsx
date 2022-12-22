import React from 'react';
import { ActivityIndicator, FlatList, StyleSheet, View } from 'react-native';
import { GameItem } from '../../components';
import { useDataFetch } from '../../hooks';
const Home = () => {
	const { info, loading } = useDataFetch(
		'https://www.freetogame.com/api/games'
	);

	const renderItem = ({ item }) => <GameItem {...item} />;

	console.log(info);

	return (
		<View style={styles.container}>
			{loading ? (
				<ActivityIndicator size="large" />
			) : (
				<FlatList
					data={info}
					renderItem={renderItem}
					keyExtractor={(i) => i.id.toString()}
					numColumns={2}
				/>
			)}
		</View>
	);
};

export default Home;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
