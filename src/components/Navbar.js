import React from 'react';
const Navbar = () => {
	/***
	 * THIS COMPONENT RENDERS THE NAVBAR
	 */
	return (
		<nav className='flex justify-between bg-blue-600 py-2.5 sticky top-0'>
			<div className='flex flex-cols justify-around text-white space-x-4 items-center'>
				<img src='/icons/scratch.png' className='ml-2' />
				<svg
					fill='white'
					width={'40' + 'px'}
					height={'40' + 'px'}
					className='px-2'>
					<use
						xlinkHref={`/icons/solid.svg#globe`}
						className='text-color-white'
					/>
				</svg>
				<a
					href='#'
					className='hover:bg-blue-700 text-white	no-underline'>
					{' '}
					File{' '}
				</a>
				<a
					href='#'
					className='hover:bg-blue-700 text-white	no-underline'>
					{' '}
					Edit{' '}
				</a>
				<a
					href='#'
					className='hover:bg-blue-700 text-white	no-underline'>
					{' '}
					Tutorials{' '}
				</a>
			</div>
			<div className=' text-white space-x-4 self-center'>
				<a
					href='#'
					className='hover:bg-blue-700 text-white	no-underline'>
					{' '}
					Join Scratch{' '}
				</a>
				<a
					href='#'
					className='hover:bg-blue-700 text-white	no-underline'>
					SignUp{' '}
				</a>
			</div>
		</nav>
	);
};

export default Navbar;
