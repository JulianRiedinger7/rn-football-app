import React from 'react'
import {
	ActivityIndicator,
	FlatList,
	Image,
	SafeAreaView,
	StatusBar,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native'
import { GameItem } from '../../components'
import { COLORS } from '../../constants'
import { useDataFetch } from '../../hooks'

const Home = ({ navigation }) => {
	const { info, loading } = useDataFetch('https://www.freetogame.com/api/games')

	const renderItem = ({ item }) => <GameItem game={item} />

	const onHandlePress = () => navigation.navigate('Profile')

	return (
		<SafeAreaView style={styles.container}>
			{loading ? (
				<ActivityIndicator size="large" />
			) : (
				<>
					<View style={styles.topContainer}>
						<Text style={styles.title}>Welcome to Freegames</Text>
						<TouchableOpacity style={styles.touchable} onPress={onHandlePress}>
							<Text style={styles.user}>User</Text>
							<Image
								source={require('../../../assets/usuario.png')}
								style={styles.image}
							/>
						</TouchableOpacity>
					</View>
					<FlatList
						data={info}
						renderItem={renderItem}
						keyExtractor={(i) => i.id.toString()}
						numColumns={2}
					/>
				</>
			)}
		</SafeAreaView>
	)
}

export default Home

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
		color: COLORS.primaryDark,
	},
	topContainer: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		alignItems: 'center',
		justifyContent: 'space-around',
	},
	touchable: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	user: {
		fontWeight: '600',
		fontStyle: 'italic',
		paddingHorizontal: 5,
	},
	image: {
		width: 50,
		height: 50,
	},
})
