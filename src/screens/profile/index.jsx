import {
	Button,
	ImageBackground,
	Keyboard,
	KeyboardAvoidingView,
	StyleSheet,
	Text,
	TextInput,
	TouchableWithoutFeedback,
	View,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { COLORS } from '../../constants';
import { isIOS } from '../../utils';
import { useDispatch, useSelector } from 'react-redux';
import { ImageSelector } from '../../components';

const Profile = ({ navigation }) => {
	const [username, setUsername] = useState('');
	const dispatch = useDispatch();
	const user = useSelector((state) => state.user.data);

	console.warn(user);

	return (
		<KeyboardAvoidingView
			behavior={isIOS ? 'padding' : 'height'}
			style={{ flex: 1 }}
		>
			<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
				<ImageBackground
					source={require('../../../assets/auth-background.jpg')}
					style={styles.container}
					resizeMode="cover"
				>
					<StatusBar style="light" />
					<View style={styles.formContainer}>
						<Text style={styles.title}>Last Step</Text>
						<Text style={styles.label}>Username</Text>
						<TextInput
							placeholder="Enter a username..."
							style={styles.input}
							autoCapitalize="none"
							autoCorrect={false}
							autoFocus={true}
							maxLength={15}
							value={username}
							onChangeText={(text) => setUsername(text)}
						/>
						<ImageSelector />
						<Button title="Finish" color={COLORS.secondary} disabled />
					</View>
				</ImageBackground>
			</TouchableWithoutFeedback>
		</KeyboardAvoidingView>
	);
};

export default Profile;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	formContainer: {
		backgroundColor: COLORS.white,
		width: '70%',
		opacity: 0.85,
		borderRadius: 10,
		padding: 20,
	},
	title: {
		alignSelf: 'center',
		fontSize: 22,
		fontWeight: 'bold',
		color: COLORS.text,
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
});
