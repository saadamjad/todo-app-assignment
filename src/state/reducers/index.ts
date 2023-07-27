/** @format */

import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { entitiesReducer } from './entities';
import { featuresReducer } from './features';

const featurePersistConfig = {
	key: 'features',
	storage: AsyncStorage,
	whitelist: [],
};

const entityPersistConfig = {
	key: 'entities',
	storage: AsyncStorage,
	whitelist: [],
};

const rootReducer = combineReducers({
	entities: persistReducer(entityPersistConfig, entitiesReducer),
	features: persistReducer(featurePersistConfig, featuresReducer),
});

export default rootReducer;
