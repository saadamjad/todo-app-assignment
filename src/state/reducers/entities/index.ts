import {combineReducers} from 'redux';

import {AuthnEntityReducer} from './authn';

const entitiesReducer = combineReducers({
  authn: AuthnEntityReducer,
});

export {entitiesReducer};
