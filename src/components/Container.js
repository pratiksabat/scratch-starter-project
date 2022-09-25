import React from 'react';

const Container = ({ itm, goToParent }) => {
	/**
	 * THIS COMPONENT REPRESENTS CIRCULAR DIV ALONG WITH LABEL
	 */
	const style = 'w-7 h-7 bg-' + itm.color + '-500 rounded-full';
	return (
		<div
			className='flex flex-col justify-items-center items-center p-1 text-sm hover: cursor-pointer'
			onClick={(e) => goToParent(e, itm.label)}>
			<div className={style}></div>
			{itm.label}
		</div>
	);
};
export default Container;
