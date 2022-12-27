import { NavigationContainer } from '@react-navigation/native';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import AuthNavigator from './auth';
import TabNavigator from './tabs';

const AppNavigator = () => {
	const user = useSelector((state) => state.user.data);

	/* later change user ? to user?.photoURL ? */
	return (
		<NavigationContainer>
			{user ? <TabNavigator /> : <AuthNavigator />}
		</NavigationContainer>
	);
};

export default AppNavigator;
