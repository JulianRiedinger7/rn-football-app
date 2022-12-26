import { NavigationContainer } from '@react-navigation/native';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import AuthNavigator from './auth';
import TabNavigator from './tabs';

const AppNavigator = () => {
	const user = useSelector((state) => state.user.data);

	return (
		<NavigationContainer>
			{user?.photoURL ? <TabNavigator /> : <AuthNavigator />}
		</NavigationContainer>
	);
};

export default AppNavigator;
