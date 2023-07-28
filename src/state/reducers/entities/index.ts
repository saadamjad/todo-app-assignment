import {combineReducers} from 'redux';

import {AuthnEntityReducer} from './authn';
import { TeacherAppointmentEntityReducer } from './teacher-appointments';

const entitiesReducer = combineReducers({
	authn: AuthnEntityReducer,
	teacherAppointment: TeacherAppointmentEntityReducer,
});

export {entitiesReducer};
