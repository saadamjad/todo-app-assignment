/** @format */

import styled from 'styled-components/native';

export const RadioGroupWrapper = styled.View`
	flex-direction: row;
`;

export const RadioButtonWrapper = styled.TouchableOpacity`
	flex-direction: row;
	align-items: center;
	margin-right: 10px;
`;

export const RadioButtonOuterCircle = styled.View`
	width: 20px;
	height: 20px;
	border-radius: 10px;
	border-width: 2px;
	border-color: #000;
	justify-content: center;
	align-items: center;
`;

export const RadioButtonInnerCircle = styled.View`
	width: 12px;
	height: 12px;
	border-radius: 6px;
	background-color: #000;
`;

export const RadioButtonLabel = styled.Text`
	margin-left: 5px;
`;
