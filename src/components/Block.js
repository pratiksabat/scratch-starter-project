import React from 'react';
import items from '../utils/items.json';
import Container from './Container';
const Block = ({ goToParent }) => {
	/**
	 * THIS COMPONENT REPRESENTS EACH BLOCK OF SIDEBAR MENU
	 */
	return (
		<div className='p-1'>
			{items.map((itm, key) => {
				return (
					<Container
						key={key}
						itm={itm}
						goToParent={goToParent}
					/>
				);
			})}
		</div>
	);
};
export default Block;
