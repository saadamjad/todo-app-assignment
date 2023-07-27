import React from 'react';
import {StyledText} from './styled';
import {StyledTextProps} from './types';

export const Text: React.FC<StyledTextProps> = ({
  color,
  size,
  align,
  children,
  numberOfLines = 2,
  testID,
}) => {
  return (
    <StyledText
      testID={testID}
      color={color}
      size={size}
      align={align}
      numberOfLines={numberOfLines}>
      {children}
    </StyledText>
  );
};
