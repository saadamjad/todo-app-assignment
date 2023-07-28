/** @format */

import React, { useState } from 'react';
import { Container, ErrorText, Input } from './styled';
import { registerUser } from '../../state/actions';
import { useDispatch, useSelector } from 'react-redux';
import { ROUTES } from '../../constants/navigation-routes';
import { RadioGroup } from '../../components';
import { IS_TEACHER, USER_TYPE } from '../../constants/common';
import { getUsers } from '../../state/selectors/entities/authn';
import {
	checkIsTeacherAvailale,
	checkStudentAvailale,
	generateRandomNumberId,
} from '../../utils/helper/helper';
import { AppButton } from '../../components/app-button';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ParamListBase, useNavigation } from '@react-navigation/native';

const RegisterComponent = () => {
	const dispatch = useDispatch();
	const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

	const [email, setEmail] = useState<string>('');
	const [name, setName] = useState<string>('teacher');
	const [password, setPassword] = useState<any>();
	const [confirmPassword, setConfirmPassword] = useState<any>();
	const [userType, setUserType] = useState<number>(IS_TEACHER);
	const [error, setError] = useState<string>('');
	const allUsers = useSelector(getUsers);

	const handleRegister = () => {
		if (!email || !password || !confirmPassword) {
			setError('Please fill in all fields.');
		} else if (password !== confirmPassword) {
			setError('Passwords do not match.');
		} else {
			const requestData = {
				id: generateRandomNumberId(),
				name,
				email,
				password,
				confirmPassword,
				userType,
			};

			checkIsTeacherAvailale(allUsers, email) ? (
				setError('Email Already Registered as Teacher')
			) : checkStudentAvailale(allUsers, email) ? (
				setError('Email Already Registered as Student')
			) : (
				<>
					{
						((dispatch(registerUser(requestData)),
						setError(''),
						setEmail(''),
						setPassword(''),
						setConfirmPassword('')),
						navigation.navigate(ROUTES.LOGIN))
					}
				</>
			);
		}
	};

	const navigationHandler = () => navigation.navigate(ROUTES.LOGIN);

	return (
		<Container>
			{error ? <ErrorText>{error}</ErrorText> : null}
			<RadioGroup
				selectedValue={userType}
				options={USER_TYPE}
				onValueChange={(e: number) => setUserType(e)}
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

			<AppButton
				onPress={handleRegister}
				name='Register'
			/>
			<AppButton
				onPress={navigationHandler}
				name='Already have an account? Go to the signin page'
			/>
		</Container>
	);
};

export default RegisterComponent;
