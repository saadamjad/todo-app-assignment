/** @format */

import React, { useState } from 'react';
import {
	Container,
	AppointmentsList,
	AppointmentItem,
	Heading,
} from './styled';
import { Text } from 'react-native';

import { getLoggedInUserData } from '../../state/selectors/entities/authn';
import { useDispatch, useSelector } from 'react-redux';
import { IS_TEACHER } from '../../constants/common';
import { ErrorText } from '../login/styled';
import {
	generateId,
	getDayNameFromDate,
	getTimeFromDate,
} from '../../utils/helper/helper';
import { AppButton } from '../../components/app-button';
import { DateTimePicker } from '../../components/date-time-picker';
import { addTeacherAppointments, deleteAppointment } from '../../state/actions';
import { getAllTeacherAppointments } from '../../state/selectors/entities/teacher-appointments';

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
			? setError('Please Select Another Slot')
			: dispatch(addTeacherAppointments(data));
	};

	const renderStudentComponent = () => (
		<Container>
			<Heading>Student Portal</Heading>

			<AppointmentsList>
				<Heading> list of all teacher apointments</Heading>
			</AppointmentsList>
		</Container>
	);

	const removeAppointments = () => {
		dispatch(deleteAppointment());
	};
	return isTeacherPanel ? (
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
			{allAppointments?.length > 0 && (
				<AppointmentsList>
					<Heading>Appointments:</Heading>
					{allAppointments?.map((val: NewAppointment, index: number) => (
						<AppointmentItem key={index}>
							<Text>{val?.name}</Text>
							<Text>Time: {val?.email}</Text>
							{val?.schedule?.map((item, i) => (
								<React.Fragment key={i}>
									<Text>Schedule: </Text>
									{/* {item?.date && (
										<Text>date: {item?.date || selectedDate}</Text>
									)} */}
									<Text>date: {item?.date?.toString()}</Text>
									<Text>day: {item?.day}</Text>
									<Text>
										start time: {item?.time?.start?.value?.toString()}
									</Text>
									<Text>end time: {item?.time?.end?.value}</Text>
									<AppButton
										onPress={() => {}}
										name='available'
									/>
								</React.Fragment>
							))}
						</AppointmentItem>
					))}
				</AppointmentsList>
			)}
		</Container>
	) : (
		renderStudentComponent()
	);
};

export default React.memo(HomeScreen);
