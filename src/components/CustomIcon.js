import React from 'react';

const CustomIcon = ({ name, size = 20, className = '' }) => {
	/**
	 * THIS COMPONENT RENDERS A SVG BASED ON INPUT
	 */
	return (
		<svg
			fill={
				name === 'flag'
					? 'green'
					: name === 'stop'
					? 'red'
					: 'white'
			}
			className={className}
			width={size.toString() + 'px'}
			height={size.toString() + 'px'}>
			<use xlinkHref={`/icons/solid.svg#${name}`} />
		</svg>
	);
};

export default CustomIcon;
