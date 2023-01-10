import {
	Button,
	SafeAreaView,
	StyleSheet,
	Text,
	TextInput,
	View,
	StatusBar as Status,
	Image,
} from 'react-native'
import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { COLORS } from '../../constants'
import { useDispatch, useSelector } from 'react-redux'
import { changeUsernameAndPhoto } from '../../store/userSlice'
import { ImageSelector } from '../../components'

const Profile = ({ navigation }) => {
	const [username, setUsername] = useState('')
	const [imagePicked, setImagePicked] = useState(null)
	const dispatch = useDispatch()
	const user = useSelector((state) => state.user.data)

	const onHandlePickImage = (uri) => setImagePicked(uri)

	const onHandleSave = () => {
		dispatch(changeUsernameAndPhoto({ username, photo: imagePicked }))
		setUsername('')
		setImagePicked(null)
	}

	return (
		<SafeAreaView style={styles.container}>
			<StatusBar style="light" />
			<Text style={styles.title}>Complete your Profile</Text>
			<View style={styles.topContainer}>
				<Text style={styles.currentAvatar}>Current Photo:</Text>
				{user.photoURL ? (
					<Image
						source={{ uri: user.photoURL }}
						style={styles.image}
						resizeMode="contain"
					/>
				) : (
					<Image
						source={require('../../../assets/usuario.png')}
						style={styles.image}
					/>
				)}
			</View>
			<View style={styles.topContainer}>
				<Text style={styles.currentAvatar}>Current Username:</Text>
				{user.displayName ? <Text>{user.displayName}</Text> : <Text>User</Text>}
			</View>
			<View style={styles.formContainer}>
				<Text style={styles.label}>Username</Text>
				<TextInput
					placeholder="Enter a username..."
					style={styles.input}
					autoCapitalize
					autoCorrect={false}
					maxLength={15}
					value={username}
					onChangeText={(text) => setUsername(text)}
				/>
				<ImageSelector onHandlePickImage={onHandlePickImage} />
				<View style={styles.saveContainer}>
					<Button
						title="Save Profile"
						color={COLORS.primary}
						disabled={!username || !imagePicked}
						onPress={onHandleSave}
					/>
				</View>
			</View>
		</SafeAreaView>
	)
}

export default Profile

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLORS.background,
		paddingTop: Status.currentHeight,
	},
	title: {
		marginVertical: 10,
		fontSize: 25,
		fontWeight: 'bold',
		alignSelf: 'center',
		color: COLORS.primaryDark,
	},
	topContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-around',
		marginBottom: 20,
	},
	currentAvatar: {
		fontWeight: '600',
		fontSize: 16,
	},
	image: {
		width: 50,
		height: 50,
		borderRadius: 50 / 2,
	},
	formContainer: {
		backgroundColor: COLORS.white,
		width: '70%',
		alignSelf: 'center',
		opacity: 0.85,
		borderRadius: 10,
		padding: 20,
	},
	label: {
		fontWeight: '500',
		fontSize: 15,
		color: COLORS.text,
	},
	input: {
		borderBottomColor: COLORS.primary,
		marginBottom: 5,
		paddingVertical: 5,
		borderBottomWidth: 1,
	},
	saveContainer: {
		marginTop: 10,
	},
})
