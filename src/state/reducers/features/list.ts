/** @format */

import { RESET_REDUCER } from '../../action-types/common';

const INITIAL_STATE = {};

const ListFeaturesReducer = (
	state = INITIAL_STATE,
	action: IAction
): allAnyTypes => {
	switch (action.type) {
		case RESET_REDUCER: {
			return INITIAL_STATE;
		}

		default:
			return state;
	}
};

export { ListFeaturesReducer };
