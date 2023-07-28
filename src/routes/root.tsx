/** @format */

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ROUTES } from '../constants/navigation-routes';
import { Splash, Home, Login, Register } from '../screens';

const { Screen, Navigator } = createNativeStackNavigator();

export const RootNavigation = () => {
	return (
		<Navigator initialRouteName={ROUTES.LOGIN}>
			<Screen
				name={ROUTES.SPLASH}
				component={Splash}
				options={{
					headerShown: false,
				}}
			/>
			<Screen
				name={ROUTES.LOGIN}
				component={Login}
				options={{
					headerShown: false,
				}}
			/>
			<Screen
				name={ROUTES.REGISTER}
				component={Register}
				options={{
					headerShown: false,
				}}
			/>
			<Screen
				name={ROUTES.HOME}
				component={Home}
				options={{
					headerShown: false,
				}}
			/>
		</Navigator>
	);
};
