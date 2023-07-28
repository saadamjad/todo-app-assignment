/** @format */

import React from 'react';
import {
	RadioButtonLabel,
	RadioGroupWrapper,
	RadioButtonWrapper,
	RadioButtonInnerCircle,
	RadioButtonOuterCircle,
} from './styled';
import { RadioGroupProps } from './types';

export const RadioGroup: React.FC<RadioGroupProps> = ({
	options,
	selectedValue,
	onValueChange,
}) => {
	const handleOptionChange = (value: any) => {
		onValueChange(value);
	};

	return (
		<RadioGroupWrapper>
			{options?.map((option: any) => (
				<RadioButtonWrapper
					key={option.id}
					onPress={() => handleOptionChange(option.id)}>
					<RadioButtonOuterCircle>
						{selectedValue === option.id && <RadioButtonInnerCircle />}
					</RadioButtonOuterCircle>
					<RadioButtonLabel>{option.label}</RadioButtonLabel>
				</RadioButtonWrapper>
			))}
		</RadioGroupWrapper>
	);
};

export default React.memo(RadioGroup);
