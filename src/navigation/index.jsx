import { NavigationContainer } from '@react-navigation/native';
import { useState } from 'react';
import AuthNavigator from './auth';
import TabNavigator from './tabs';

const AppNavigator = () => {
	const [user, setUser] = useState(true);

	return (
		<NavigationContainer>
			{user ? <TabNavigator /> : <AuthNavigator />}
		</NavigationContainer>
	);
};

export default AppNavigator;
