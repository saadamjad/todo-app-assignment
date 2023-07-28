/** @format */

import React, { useState } from 'react';
import {
	Container,
	AppointmentsList,
	AppointmentItem,
	Heading,
} from './styled';
import { FlatList, Text } from 'react-native';
import { getLoggedInUserData } from '../../state/selectors/entities/authn';
import { getAllTeacherAppointments } from '../../state/selectors/entities/teacher-appointments';
import { addTeacherAppointments, deleteAppointment } from '../../state/actions';
import { AppButton, DateTimePicker } from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import { IS_TEACHER } from '../../constants/common';
import { ErrorText } from '../login/styled';
import {
	generateId,
	getDayNameFromDate,
	getTimeFromDate,
} from '../../utils/helper/helper';

const HomeScreen: React.FC = () => {
	const allAppointments = useSelector(getAllTeacherAppointments);
	const dispatch = useDispatch();

	const loggedInUser = useSelector(getLoggedInUserData);
	const [selectedDate, setSelectedDate] = useState(new Date());
	const [selectedTime, setSelectedTime] = useState(new Date());
	const [error, setError] = useState('');

	const { email, password, name, userType } = loggedInUser;
	const isTeacherPanel = userType === IS_TEACHER;

	const handleCreateAppointment = () => {
		const newAppointment: NewAppointment = {
			id: generateId(),
			name,
			email,
			password,
			schedule: [
				{
					date: selectedDate,
					available: true,
					day: getDayNameFromDate(selectedDate),
					time: {
						start: {
							value: getTimeFromDate(selectedTime),
						},
						end: {
							value: getTimeFromDate(selectedTime),
						},
					},
				},
			],
		};

		let appointmentIsAlreadyExist = false;

		allAppointments?.map((item: isTypeObject, _i: number) => {
			if (item?.schedule?.some((e: isTypeObject) => e?.date === selectedDate)) {
				appointmentIsAlreadyExist = true;
			}
		});
		const data = [...allAppointments, newAppointment];
		appointmentIsAlreadyExist
			? setError('You Already Booked this Slot! \n Please Select Another Slot')
			: (dispatch(addTeacherAppointments(data)), setError(''));
	};

	const renderITem = ({ item, index }: FlatListProp) => (
		<AppointmentItem key={index}>
			<Text>{item?.name}</Text>
			<Text>Time: {item?.email}</Text>
			{item?.schedule?.map((val: isTypeObject, i: number) => (
				<React.Fragment key={i}>
					<Text>Schedule: </Text>
					<Text>date: {val?.date?.toString()}</Text>
					<Text>day: {val?.day}</Text>
					<Text>start time: {val?.time?.start?.value?.toString()}</Text>
					<Text>end time: {val?.time?.end?.value}</Text>
					{val.available ? (
						<Text
							style={{
								backgroundColor: 'gray',
								color: 'white',
								fontWeight: 'bold',
								marginVertical: 10,
							}}>
							{' '}
							Slot Availale{' '}
						</Text>
					) : (
						<Text style={{ backgroundColor: 'red' }}>Booked </Text>
					)}
				</React.Fragment>
			))}
		</AppointmentItem>
	);
	const renderAppointments = () => (
		<FlatList
			data={allAppointments}
			renderItem={renderITem}
			keyExtractor={(item) => item.id}
		/>
	);

	const renderStudentPanel = () => (
		<Container>
			<Heading>Student Portal</Heading>

			<AppointmentsList>
				<Heading> list of all teacher apointments</Heading>
				{renderAppointments()}
			</AppointmentsList>
		</Container>
	);

	const removeAppointments = () => {
		dispatch(deleteAppointment());
		setError('');
	};

	const renderTeacherPanel = () => (
		<Container>
			<DateTimePicker
				mode={'date'}
				setter={(e: isTypeObject) => setSelectedDate(e)}
				value={selectedDate}
			/>

			<DateTimePicker
				mode={'time'}
				setter={(e: isTypeObject) => setSelectedTime(e)}
				value={selectedTime}
			/>
			<Text
				style={{
					borderWidth: 0.1,
					paddingHorizontal: 10,
					paddingVertical: 10,
				}}>
				{getDayNameFromDate(selectedDate)}
			</Text>

			<AppButton
				name='Create Appointment'
				onPress={handleCreateAppointment}
			/>

			<AppButton
				name='Delete All pointments'
				onPress={removeAppointments}
			/>
			{error ? <ErrorText>{error}</ErrorText> : null}
			{renderAppointments()}
		</Container>
	);
	return isTeacherPanel ? renderTeacherPanel() : renderStudentPanel();
};

export default React.memo(HomeScreen);
