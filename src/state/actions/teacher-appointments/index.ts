/** @format */

import {
	ADD_TEACHER_APPOINTMENT_SUCCESS,
	DELETE_TEACHER_APPOINTMENT_SUCCESS,
} from '../../action-types/appointments';

export const addTeacherAppointments = (payload: isTypeObject): IAction => ({
	type: ADD_TEACHER_APPOINTMENT_SUCCESS,
	payload,
});
export const deleteAppointment = () => ({
	type: DELETE_TEACHER_APPOINTMENT_SUCCESS,
});
