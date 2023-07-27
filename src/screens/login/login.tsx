/** @format */

import React, { useState } from 'react';
import { Button, ButtonText, Container, ErrorText, Input } from './styled';
import { ROUTES } from '../../constants/navigation-routes';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../state/selectors/entities/authn';
import { loginUser } from '../../state/actions';

const LoginComponent = ({ navigation }) => {
	const dispatch = useDispatch();
	const [email, setEmail] = useState('saad@gmail.com');
	const [password, setPassword] = useState('12345');
	const [error, setError] = useState('');
	const allUsers = useSelector(getUsers);
	const isTeacherAvailable = allUsers.teachers.some((e) => e.email == email);
	const isStudentAvailale = allUsers.students.some((e) => e.email == email);
	const teacherData = allUsers.teachers.find((e) => e.email == email);
	const studentData = allUsers.students.find((e) => e.email == email);

	const handleLogin = () => {
		if (!email || !password) {
			setError('Please fill in all fields.');
		} else {
			if (isTeacherAvailable) {
				const requestData = { ...teacherData, type: 1 };
				dispatch(loginUser(requestData));
				navigation.navigate(ROUTES.HOME);
			}
			if (isStudentAvailale) {
				const requestData = { ...studentData, type: 2 };
				dispatch(loginUser(requestData));
				navigation.navigate(ROUTES.HOME);
			}

			setEmail('');
			setPassword('');
			setError('No data found');
		}
	};

	return (
		<Container>
			{error ? <ErrorText>{error}</ErrorText> : null}
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
			<Button onPress={handleLogin}>
				<ButtonText>Login</ButtonText>
			</Button>
		</Container>
	);
};

export default LoginComponent;
