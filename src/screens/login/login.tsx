/** @format */

import React, { useState } from 'react';
import { Container, ErrorText, Input } from './styled';
import { ROUTES } from '../../constants/navigation-routes';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../state/selectors/entities/authn';
import { loginUser } from '../../state/actions';
import { AppButton } from '../../components/app-button';
import {
	checkIsTeacherAvailale,
	checkStudentAvailale,
} from '../../utils/helper/helper';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const LoginComponent = () => {
	const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
	const dispatch = useDispatch();
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [error, setError] = useState<string>('');
	const allUsers = useSelector(getUsers);

	// all logics
	const handleLogin = () => {
		if (!email || !password) {
			setError('Please fill in all fields.');
		} else {
			console.log(checkIsTeacherAvailale(allUsers, email));
			console.log(checkStudentAvailale(allUsers, email));
			checkIsTeacherAvailale(allUsers, email) ||
			checkStudentAvailale(allUsers, email) ? (
				<>{dispatch(loginUser({ email }))}</>
			) : (
				(setError('No data found'), setEmail(''), setPassword(''))
			);
		}
	};

	const navigationHandler = () => navigation.navigate(ROUTES.REGISTER);
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

			<AppButton
				onPress={handleLogin}
				name='Login'
			/>
			<AppButton
				onPress={navigationHandler}
				name='Go to the Register Page'
			/>
		</Container>
	);
};

export default LoginComponent;
