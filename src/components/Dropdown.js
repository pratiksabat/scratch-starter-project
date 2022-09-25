import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const DropDown = ({ label, options, style }) => {
	/**
	 * THIS COMPONENT RENDERS A DROPDOWN
	 */
	return (
		<DropdownButton size='sm' title={label} className={style}>
			{options.map((option, key) => {
				return (
					<Dropdown.Item href='#' key={key}>
						{option}
					</Dropdown.Item>
				);
			})}
		</DropdownButton>
	);
};

export default DropDown;
