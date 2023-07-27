/** @format */

import React from 'react';
import { TileContainer } from './styled';
import { ITileProps } from './types';
import { Text } from '../text';

export const Tile: React.FC<ITileProps> = ({
	borderColor,
	backgroundColor,
	text,
	textColor,
	width,
	height,
	topCorner,
	topLeftCorner,
}) => {
	return (
		<TileContainer
			backgroundColor={backgroundColor}
			borderColor={borderColor}
			width={width}
			height={height}
			topLeftCorner={topLeftCorner}
			topCorner={topCorner}>
			<Text
				color={textColor}
				size={'10px'}></Text>
		</TileContainer>
	);
};
