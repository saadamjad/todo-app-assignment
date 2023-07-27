import styled, {css} from 'styled-components/native';
import {StyledTextProps} from './types';

export const StyledText = styled.Text<StyledTextProps>`
  color: ${({color}) => color};
  font-size: ${({size}) => size};
  ${({align}) =>
    align &&
    css`
      align-self: center;
    `}
`;
