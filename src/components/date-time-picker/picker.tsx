/** @format */

import React, { useState } from 'react';
import { PickerContainer, DatePicker, DatePickerText } from './styled';
import { getTimeFromDate } from '../../utils/helper/helper';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { AppButton } from '../app-button';

export const DateTimePicker: React.FC<IDateTimePickerProps> = ({
	mode,
	setter,
	value,
}) => {
	const [visible, setVisible] = useState<boolean>(false);
	const handleDatePickerState = (status: boolean) => {
		setVisible(!status);
	};
	return (
		<PickerContainer>
			<AppButton
				onPress={() => handleDatePickerState(visible)}
				name={
					mode == 'time' ? getTimeFromDate(value) : value?.toLocaleDateString()
				}
			/>
			<DateTimePickerModal
				isVisible={visible}
				mode={mode}
				date={value}
				onConfirm={(date) => {
					setter(date);
					handleDatePickerState(visible);
				}}
				onCancel={() => setVisible(false)}
			/>
		</PickerContainer>
	);
};

export default React.memo(DateTimePicker);
