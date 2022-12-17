import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './auth';

const AppNavigator = () => {
	return (
		<NavigationContainer>
			<AuthNavigator />
		</NavigationContainer>
	);
};

export default AppNavigator;
