/** @format */

import React, { useEffect, useState } from 'react';
import { Button, ButtonText, Container, ErrorText, Input } from './styled';
import { registerUser } from '../../state/actions';
import { useDispatch, useSelector } from 'react-redux';
import { ROUTES } from '../../constants/navigation-routes';
import { RadioGroup } from '../../components';

function generateRandomNumberId(length = 8) {
	const min = Math.pow(10, length - 1);
	const max = Math.pow(10, length) - 1;
	return Math.floor(Math.random() * (max - min + 1) + min);
}

const RegisterComponent = ({ navigation }) => {
	const dispatch = useDispatch();

	const [email, setEmail] = useState('saad@gmail.com');
	const [name, setName] = useState('teacher');
	const [password, setPassword] = useState('12345');
	const [confirmPassword, setConfirmPassword] = useState('12345');
	const [error, setError] = useState('');

	const handleRegister = () => {
		const id = generateRandomNumberId();
		if (!email || !password || !confirmPassword) {
			setError('Please fill in all fields.');
		} else if (password !== confirmPassword) {
			setError('Passwords do not match.');
		} else {
			const requestData = {
				id,
				name,
				email,
				password,
				confirmPassword,
			};
			dispatch(registerUser(requestData));
			navigation.navigate(ROUTES.LOGIN);

			setError('');
			setEmail('');
			setPassword('');
			setConfirmPassword('');
		}
	};

	return (
		<Container>
			{error ? <ErrorText>{error}</ErrorText> : null}
			<RadioGroup
				options={[{ value: 'teacher' }, { value: 'student' }]}
				onValueChange={(e) => console.log(e)}
			/>

			<Input
				placeholder='Name'
				value={name}
				onChangeText={(text) => setName(text)}
			/>
			<Input
				placeholder='Email'
				value={email}
				onChangeText={(text) => setEmail(text)}
				keyboardType='email-address'
				autoCapitalize='none'
			/>
			<Input
				placeholder='Password'
				value={password}
				onChangeText={(text) => setPassword(text)}
				secureTextEntry
			/>
			<Input
				placeholder='Confirm Password'
				value={confirmPassword}
				onChangeText={(text) => setConfirmPassword(text)}
				secureTextEntry
			/>
			<Button onPress={handleRegister}>
				<ButtonText>Register</ButtonText>
			</Button>
		</Container>
	);
};

export default RegisterComponent;
