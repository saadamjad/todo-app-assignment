/** @format */

import React, { useState } from 'react';
import {
	Container,
	Button,
	ButtonText,
	TeacherContainer,
	TeacherText,
	AppointmentsList,
	AppointmentItem,
	Heading,
} from './styled';
import { Text } from 'react-native';

import {
	getLoggedInUserData,
	getUsers,
} from '../../state/selectors/entities/authn';
import { useSelector } from 'react-redux';

const HomeScreen: React.FC = () => {
	const [appointments, setAppointments] = useState<Appointment[]>([]);
	const loggedInUser = useSelector(getLoggedInUserData);
	const isTeacher = loggedInUser.type === 1;
	const teachersData: TeacherData[] = [
		{
			id: '1d413197-a48c-4537-9820-00d9b8d70181',
			name: 'testteacher1',
			email: 'testteacher1@email.com',
			password: '123456',
			schedule: [
				{
					day: 'Monday',
					time: {
						start: {
							value: '10:00',
							meridian: 'AM',
						},
						end: {
							value: '05:00',
							meridian: 'PM',
						},
					},
				},
			],
			available: true,
		},
	];

	const handleCreateAppointment = (teacher: TeacherData) => {
		const newAppointment: Appointment = {
			id: Math.random().toString(),
			teacher,
			appointmentTime: 'Monday 10:30 AM',
		};

		setAppointments([...appointments, newAppointment]);
	};

	const renderTeacherComponent = () => (
		<Container>
			{teachersData?.map((teacher) => (
				<TeacherContainer key={teacher.id}>
					<TeacherText>{teacher.name}</TeacherText>
					<Button onPress={() => handleCreateAppointment(teacher)}>
						<ButtonText>Book Appointment</ButtonText>
					</Button>
				</TeacherContainer>
			))}

			{appointments.length > 0 && (
				<AppointmentsList>
					<Heading>Appointments:</Heading>
					{appointments?.map((appointment) => (
						<AppointmentItem key={appointment.id}>
							<Text>{appointment.teacher.name}</Text>
							<Text>Time: {appointment.appointmentTime}</Text>
						</AppointmentItem>
					))}
				</AppointmentsList>
			)}
		</Container>
	);
	const renderStudentComponent = () => (
		<Container>
			<Heading>Student loggedIn</Heading>

			<AppointmentsList>
				<Heading> All Teacher</Heading>
			</AppointmentsList>
		</Container>
	);
	return isTeacher ? renderTeacherComponent() : renderStudentComponent();
};

export default React.memo(HomeScreen);
