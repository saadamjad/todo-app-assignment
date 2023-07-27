/**
 * eslint-disable react-hooks/exhaustive-deps
 *
 * @format
 */

import React, { useEffect } from 'react';
import { ScreenWrapper, Text } from './styled';
import { useNavigation, ParamListBase } from '@react-navigation/native';
import { ROUTES } from '../../constants/navigation-routes';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const Splash = () => {
	const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

	useEffect(() => {
		const timeout = setTimeout(() => {
			navigation.navigate(ROUTES.LOGIN);
		}, 2000);

		return () => clearTimeout(timeout);
	}, []);

	return (
		<ScreenWrapper>
			<Text testID='splash-title-text'>{'To Do App Assignment'}</Text>
		</ScreenWrapper>
	);
};

export { Splash };
