/** @format */

import {
	ADD_TEACHER_APPOINTMENT_SUCCESS,
	DELETE_TEACHER_APPOINTMENT_SUCCESS,
} from '../../action-types/appointments';

const INITIAL_STATE = {
	teacherAppointments: [],
};

const TeacherAppointmentEntityReducer = (
	state = INITIAL_STATE,
	action: IAction
): allAnyTypes => {
	switch (action.type) {
		case ADD_TEACHER_APPOINTMENT_SUCCESS: {
			return {
				...state,
				teacherAppointments: action.payload,
			};
		}
		case DELETE_TEACHER_APPOINTMENT_SUCCESS: {
			return {
				...INITIAL_STATE,
			};
		}

		default:
			return state;
	}
};

export { TeacherAppointmentEntityReducer };
