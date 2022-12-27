import React from 'react';
import {
	ActivityIndicator,
	FlatList,
	SafeAreaView,
	StatusBar,
	StyleSheet,
	Text,
} from 'react-native';
import { GameItem } from '../../components';
import { COLORS } from '../../constants';
import { useDataFetch } from '../../hooks';

const Home = () => {
	const { info, loading } = useDataFetch(
		'https://www.freetogame.com/api/games'
	);

	const renderItem = ({ item }) => <GameItem game={item} />;

	console.log(info);

	return (
		<SafeAreaView style={styles.container}>
			{loading ? (
				<ActivityIndicator size="large" />
			) : (
				<>
					<Text style={styles.title}>Welcome to Freegames</Text>
					<FlatList
						data={info}
						renderItem={renderItem}
						keyExtractor={(i) => i.id.toString()}
						numColumns={2}
					/>
				</>
			)}
		</SafeAreaView>
	);
};

export default Home;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: StatusBar.currentHeight,
		backgroundColor: COLORS.background,
	},
	title: {
		marginVertical: 10,
		fontSize: 25,
		fontWeight: 'bold',
		alignSelf: 'center',
	},
});
