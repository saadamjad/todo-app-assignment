import styled, {css} from 'styled-components/native';
import {TileProps} from './types';

export const TileContainer = styled.View<TileProps>`
  height: ${({height}) => height};
  width: ${({width}) => width};
  ${({backgroundColor}) =>
    backgroundColor &&
    css`
      background-color: ${backgroundColor};
    `}
  ${({borderColor}) =>
    borderColor &&
    css`
      border-color: ${borderColor};
      border-width: 1px;
    `}
  border-radius: 4px;
  ${({topCorner}) =>
    topCorner &&
    css`
      border-top-right-radius: 10px;
    `}
  ${({topLeftCorner}) =>
    topLeftCorner &&
    css`
      border-top-left-radius: 10px;
    `}
  justify-content: center;
  align-items: center;
`;
