import * as Location from 'expo-location'
import React, { useState } from 'react'
import { Alert, Button, StyleSheet, Text, View } from 'react-native'
import { COLORS } from '../../constants'

const LocationSelector = ({ onHandlePickLocation }) => {
	const [locationPicked, setLocationPicked] = useState(null)

	const verifyPermission = async () => {
		const { status } = await Location.requestForegroundPermissionsAsync()

		if (status !== 'granted') {
			Alert.alert(
				'Permissions denied',
				'You need to authorize the camera to continue',
				[{ text: 'OK' }]
			)
			return false
		}
		return true
	}

	const onHandleGetLocation = async () => {
		const isLocationPermission = await verifyPermission()

		if (!isLocationPermission) return

		const location = await Location.getCurrentPositionAsync({
			timeInterval: 5000,
		})

		const { latitude, longitude } = location.coords

		setLocationPicked({ lat: latitude, lng: longitude })

		onHandlePickLocation({ lat: latitude, lng: longitude })
	}

	return (
		<>
			<View style={styles.photoContainer}>
				{!locationPicked ? (
					<Text style={styles.photoText}>No location selected</Text>
				) : (
					<Text>
						Latitude {locationPicked.lat} Longitude {locationPicked.lng}
					</Text>
				)}
			</View>
			<Button
				title="Get Location"
				color={COLORS.secondary}
				onPress={onHandleGetLocation}
			/>
		</>
	)
}

export default LocationSelector

const styles = StyleSheet.create({
	photoContainer: {
		borderColor: COLORS.secondary,
		borderWidth: 1,
		marginVertical: 10,
		height: 170,
		justifyContent: 'center',
		alignItems: 'center',
	},
	photoText: {
		fontSize: 15,
		fontWeight: '600',
		color: COLORS.text,
	},
	image: {
		width: '100%',
		height: '100%',
	},
})
