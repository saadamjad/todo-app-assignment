/** @format */

import React from 'react';
import { SafeAreaView, StatusBar, useColorScheme } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Routes } from './src/routes/index-routes';
import { Provider } from 'react-redux';
import reduxStore from './src/state/store';
import { PersistGate } from 'redux-persist/integration/react';
import Toast from 'react-native-toast-message';
export const { store, persistor } = reduxStore();

const App = () => {
	const isDarkMode = useColorScheme() === 'dark';

	const backgroundStyle = {
		backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
		flex: 1,
	};

	return (
		<SafeAreaView style={backgroundStyle}>
			<StatusBar
				barStyle={isDarkMode ? 'light-content' : 'dark-content'}
				backgroundColor={backgroundStyle.backgroundColor}
			/>
			<Provider store={store}>
				<PersistGate
					loading={null}
					persistor={persistor}>
					<Routes />
					<Toast />
				</PersistGate>
			</Provider>
		</SafeAreaView>
	);
};

export default App;
