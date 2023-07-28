/** @format */

import React from 'react';
import { Button, ButtonText } from './styled';
import { AppButtonProps } from './types';

export const AppButton: React.FC<AppButtonProps> = ({ onPress, name }) => {
	return (
		<Button onPress={onPress}>
			<ButtonText> {name}</ButtonText>
		</Button>
	);
};

export default React.memo(AppButton);
