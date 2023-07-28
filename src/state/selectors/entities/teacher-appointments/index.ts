/** @format */

import get from 'lodash.get';
import { createSelector } from 'reselect';

const baseSelector = (state: TReduxState) => state.entities.teacherAppointment;

export const data = createSelector(baseSelector, (state) => state);

export const getAllTeacherAppointments = createSelector(data, (data) =>
	get(data, 'teacherAppointments', [])
);
