import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Detail, Home } from '../screens';

const Stack = createNativeStackNavigator();

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
		</Stack.Navigator>
	);
};

export default GamesNavigator;
