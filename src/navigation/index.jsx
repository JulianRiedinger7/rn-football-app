import AsyncStorage from '@react-native-async-storage/async-storage'
import { NavigationContainer } from '@react-navigation/native'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setUser } from '../store/userSlice'
import AuthNavigator from './auth'
import TabNavigator from './tabs'

const AppNavigator = () => {
	const user = useSelector((state) => state.user.data)
	const dispatch = useDispatch()
	useEffect(() => {
		getStorageUser()
	}, [])

	const getStorageUser = async () => {
		try {
			const result = await AsyncStorage.getItem('user')
			dispatch(setUser(result))
		} catch (error) {
			throw error
		}
	}

	return (
		<NavigationContainer>
			{user ? <TabNavigator /> : <AuthNavigator />}
		</NavigationContainer>
	)
}

export default AppNavigator
