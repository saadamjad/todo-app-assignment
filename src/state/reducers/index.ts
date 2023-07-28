/** @format */

import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { entitiesReducer } from './entities';

const entityPersistConfig = {
	key: 'entities',
	storage: AsyncStorage,
	whitelist: ['teacherAppointment', 'authn'],
};

const rootReducer = combineReducers({
	entities: persistReducer(entityPersistConfig, entitiesReducer),
});

export default rootReducer;
