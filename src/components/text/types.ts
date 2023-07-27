import {ReactNode} from 'react';

export interface StyledTextProps {
  color?: string;
  testID?: string;
  size?: string;
  align?: boolean;
  children?: ReactNode;
  numberOfLines?: number;
}
