import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Matches } from '../screens';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
	return (
		<Tab.Navigator>
			<Tab.Screen name="Home" component={Home} />
			<Tab.Screen name="Matches" component={Matches} />
		</Tab.Navigator>
	);
};

export default TabNavigator;
