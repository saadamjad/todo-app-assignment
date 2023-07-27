/** @format */

import get from 'lodash.get';
import { createSelector } from 'reselect';

const baseSelector = (state: TReduxState) => state.entities.authn;

export const data = createSelector(baseSelector, (state) => state);

export const getUsers = createSelector(data, (data) =>
	get(data, 'users', false)
);
export const getLoggedInUserData = createSelector(data, (data) =>
	get(data, 'loggedInUser', {})
);
