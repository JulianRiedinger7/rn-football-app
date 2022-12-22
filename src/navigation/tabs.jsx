import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { Favorites, Home } from '../screens';
import { COLORS } from '../constants';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
	return (
		<Tab.Navigator
			initialRouteName="Home"
			screenOptions={{
				headerShown: false,
				tabBarInactiveTintColor: COLORS.gray,
				tabBarActiveTintColor: COLORS.text,
				tabBarLabelStyle: {
					fontSize: 13,
					fontWeight: 'bold',
				},
			}}
		>
			<Tab.Screen
				name="Home"
				component={Home}
				options={{
					tabBarIcon: ({ focused }) => (
						<Ionicons
							name={focused ? 'home' : 'home-outline'}
							size={30}
							color={focused ? COLORS.primary : COLORS.primaryDark}
						/>
					),
				}}
			/>
			<Tab.Screen
				name="Favorites"
				component={Favorites}
				options={{
					tabBarIcon: ({ focused }) => (
						<Ionicons
							name={focused ? 'heart' : 'heart-outline'}
							size={30}
							color={focused ? COLORS.primary : COLORS.primaryDark}
						/>
					),
				}}
			/>
		</Tab.Navigator>
	);
};

export default TabNavigator;
