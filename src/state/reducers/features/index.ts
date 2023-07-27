import {combineReducers} from 'redux';
import {ListFeaturesReducer} from './list';

const featuresReducer = combineReducers({
  list: ListFeaturesReducer,
});

export {featuresReducer};
