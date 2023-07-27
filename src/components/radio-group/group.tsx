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
					key={option.value}
					testID={'filter-' + option.label}
					onPress={() => handleOptionChange(option.value)}>
					<RadioButtonOuterCircle>
						{selectedValue === option.value && <RadioButtonInnerCircle />}
					</RadioButtonOuterCircle>
					<RadioButtonLabel>{option.label}</RadioButtonLabel>
				</RadioButtonWrapper>
			))}
		</RadioGroupWrapper>
	);
};

export default RadioGroup;
