/** @format */

import { IS_TEACHER } from '../../../constants/common';
import { ROUTES } from '../../../constants/navigation-routes';
import { navigationService } from '../../../services';
import {
	checkIsTeacherAvailale,
	findStudentDataByEmail,
	findTeacherDataByEmail,
} from '../../../utils/helper/helper';
import { RESET_REDUCER } from '../../action-types/common';
import { LOGIN_SUCCESS, REGISTER_SUCCESS } from '../../action-types/register';

const INITIAL_STATE = {
	users: {
		teachers: [],
		students: [],
	},
	loggedInUser: {},
};

const AuthnEntityReducer = (
	state = INITIAL_STATE,
	action: IAction
): allAnyTypes => {
	switch (action.type) {
		case REGISTER_SUCCESS: {
			const teacherData = {
				...state.users,
				teachers: [...state.users.teachers, action.payload],
			};
			const studentData = {
				...state.users,
				students: [...state.users.students, action.payload],
			};
			return {
				...state,
				users:
					action.payload.userType === IS_TEACHER ? teacherData : studentData,
			};
		}

		case LOGIN_SUCCESS: {
			const { email } = action.payload;
			navigationService.navigate(ROUTES.HOME);
			return {
				...state,
				loggedInUser: checkIsTeacherAvailale(state.users, email)
					? findTeacherDataByEmail(state.users, email)
					: findStudentDataByEmail(state.users, email),
			};
		}

		case RESET_REDUCER: {
			return {
				...INITIAL_STATE,
			};
		}

		default:
			return state;
	}
};

export { AuthnEntityReducer };
