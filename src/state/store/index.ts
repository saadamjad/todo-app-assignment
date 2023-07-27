import {createStore, applyMiddleware, compose} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import {persistStore} from 'redux-persist';
import rootReducer from '../reducers';

const middlewares = [thunkMiddleware];

export const store = createStore(
  rootReducer,
  {},
  compose(composeWithDevTools(applyMiddleware(...middlewares))),
);

export type ReduxState = ReturnType<typeof store.getState>;

export default () => {
  const persistor = persistStore(store, null);
  return {store, persistor};
};
