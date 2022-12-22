import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Favorites, Home } from '../screens';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
	return (
		<Tab.Navigator>
			<Tab.Screen name="Home" component={Home} />
			<Tab.Screen name="Favorites" component={Favorites} />
		</Tab.Navigator>
	);
};

export default TabNavigator;
