import {
	Alert,
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
import { auth } from '../../constants';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../../store/userSlice';

const Login = ({ navigation }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const dispatch = useDispatch();
	const user = useSelector((state) => state.user.data);

	const onHandleSignIn = async () => {
		try {
			const signedUser = await signInWithEmailAndPassword(
				auth,
				email,
				password
			);
			dispatch(setUser(signedUser.user));

			if (!user.photoURL) navigation.navigate('Profile');

			setEmail('');
			setPassword('');
		} catch (error) {
			Alert.alert(error.message);
		}
	};

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
						<Text style={styles.title}>Login</Text>
						<Text style={styles.label}>Email</Text>
						<TextInput
							style={styles.input}
							placeholder="Enter your email..."
							autoCapitalize="none"
							autoCorrect={false}
							autoFocus={true}
							maxLength={30}
							keyboardType="email-address"
							value={email}
							onChangeText={(text) => setEmail(text)}
						/>
						<Text style={styles.label}>Password</Text>
						<TextInput
							style={styles.input}
							placeholder="Enter your password..."
							secureTextEntry
							autoCapitalize="none"
							autoCorrect={false}
							maxLength={30}
							keyboardType="default"
							value={password}
							onChangeText={(text) => setPassword(text)}
						/>
						<Button
							title="Sign In"
							color={COLORS.primary}
							onPress={onHandleSignIn}
						/>
						<Text style={styles.account}>Don't have an account?</Text>
						<Button
							title="Sign Up"
							color={COLORS.secondary}
							onPress={() => navigation.navigate('Register')}
						/>
					</View>
				</ImageBackground>
			</TouchableWithoutFeedback>
		</KeyboardAvoidingView>
	);
};

export default Login;

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
		color: COLORS.text,
		fontSize: 15,
		fontWeight: '500',
	},
	input: {
		marginBottom: 10,
		paddingVertical: 5,
		borderBottomColor: COLORS.primary,
		borderBottomWidth: 1,
	},
	account: {
		color: COLORS.secondaryDark,
		fontSize: 15,
		marginVertical: 5,
		fontWeight: '600',
		fontStyle: 'italic',
	},
});
