import styled from 'styled-components/native';

export const Container = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;
`;

export const Input = styled.TextInput`
	width: 80%;
	height: 40px;
	margin-bottom: 10px;
	border: 1px solid #ccc;
	border-radius: 5px;
	padding: 10px;
`;


export const ErrorText = styled.Text`
  color: red;
  margin-bottom: 10px;
`;
