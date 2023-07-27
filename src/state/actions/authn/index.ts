/** @format */

import { REGISTER_SUCCESS, LOGIN_SUCCESS } from '../../action-types/register';

export const registerUser = (payload: isTypeObject): IAction => ({
	type: REGISTER_SUCCESS,
	payload,
});
export const loginUser = (payload: isTypeObject): IAction => ({
	type: LOGIN_SUCCESS,
	payload,
});
