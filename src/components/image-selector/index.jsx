import { Alert, Button, Image, StyleSheet, Text, View } from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import React, { useState } from 'react'
import { COLORS } from '../../constants'

const ImageSelector = ({ onHandlePickImage }) => {
	const [pickedURL, setPickedURL] = useState(null)

	const verifyPermissions = async () => {
		const { status } = await ImagePicker.requestCameraPermissionsAsync()

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

	const onHandleImagePicker = async () => {
		const grantedPermissions = await verifyPermissions()

		if (!grantedPermissions) return

		const result = await ImagePicker.launchCameraAsync({
			allowsEditing: true,
			aspect: [16, 9],
			quality: 0.7,
		})

		if (!result.canceled) {
			setPickedURL(result.assets[0].uri)
			onHandlePickImage(result.assets[0].uri)
		}

		console.warn('image', result)
	}

	return (
		<>
			<View style={styles.photoContainer}>
				{!pickedURL ? (
					<Text style={styles.photoText}>No photo uploaded</Text>
				) : (
					<Image source={{ uri: pickedURL }} style={styles.image} />
				)}
			</View>
			<Button
				title="Upload Photo"
				color={COLORS.secondary}
				onPress={onHandleImagePicker}
			/>
		</>
	)
}

export default ImageSelector

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
