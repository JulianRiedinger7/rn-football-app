import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { CategoryGames, Detail, Home } from '../screens'

const Stack = createNativeStackNavigator()

const GamesNavigator = () => {
	return (
		<Stack.Navigator initialRouteName="Home">
			<Stack.Screen
				name="Home"
				component={Home}
				options={{
					headerShown: false,
				}}
			/>
			<Stack.Screen name="Detail" component={Detail} />
			<Stack.Screen
				name="Category Games"
				component={CategoryGames}
				options={{
					headerShown: false,
				}}
			/>
		</Stack.Navigator>
	)
}

export default GamesNavigator
