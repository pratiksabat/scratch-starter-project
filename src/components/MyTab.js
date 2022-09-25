import 'bootstrap/dist/css/bootstrap.css';
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import App from '../App';
import CustomIcon from './CustomIcon';
import PreviewArea from './PreviewArea';

const MyTab = () => {
	/**
	 * THIS COMPONENT HOUSES ALL DIFFERENT TABS IN OUR APP
	 */
	const [first, setfirst] = useState([]);
	const [clicked, setClicked] = useState(false);
	const [actions, setActions] = useState([]);
	const [sprites, setSprites] = useState([
		{ path: '/icons/catsprite.svg', type: 'svg' },
	]);

	const collectData = (data) => {
		setfirst(data);
	};

	const abcd = (d) => {
		setfirst(d);
	};

	const def = (e) => {
		setSprites((sprite) => [
			...sprite,
			{ path: '/icons/shiba.png', type: 'png' },
		]);
	};

	return (
		<div className='flex bg-blue-200'>
			<div className='flex flex-col w-2/3'>
				<Tabs defaultActiveKey='code'>
					<Tab
						eventKey='code'
						title={
							<span className='flex justify-center items-center'>
								<svg
									fill='grey'
									width={'30' + 'px'}
									height={'30' + 'px'}
									className='px-2'>
									<use
										xlinkHref={`/icons/solid.svg#laptop-code`}
										className='text-color-white'
									/>
								</svg>
								<span>Code</span>
							</span>
						}>
						<App collectData={collectData} abcd={abcd} />
					</Tab>
					<Tab
						eventKey='costume'
						title={
							<span className='flex justify-center items-center'>
								<svg
									fill='grey'
									width={'30' + 'px'}
									height={'30' + 'px'}
									className='px-2'>
									<use
										xlinkHref={`/icons/solid.svg#paint-brush`}
										className='text-color-white'
									/>
								</svg>
								<span>Costume</span>
							</span>
						}>
						<h1>Costume</h1>
					</Tab>
					<Tab
						eventKey='sound'
						title={
							<span className='flex justify-center items-center'>
								<svg
									fill='grey'
									width={'30' + 'px'}
									height={'30' + 'px'}
									className='px-2'>
									<use
										xlinkHref={`/icons/solid.svg#voicemail`}
										className='text-color-white'
									/>
								</svg>
								<span>Sound</span>
							</span>
						}>
						<h1>Sounds</h1>
					</Tab>
				</Tabs>
			</div>
			<div className='flex flex-col w-1/3'>
				<div className='flex px-2 py-2 my-1'>
					<a
						href='#'
						onClick={(e) => {
							setActions(actions);
							setClicked(!clicked);
						}}>
						<CustomIcon
							name='flag'
							size={25}
							className='mx-1'
						/>
					</a>
					<a href='#'>
						<CustomIcon
							name='stop'
							size={25}
							className='mx-1 rounded-full'
						/>
					</a>
				</div>
				<div className='h-full overflow-auto flex flex-row bg-white border-t border-l border-gray-200 rounded-tl-xl ml-2 justify-center items-center'>
					<PreviewArea
						actions={first}
						clicked={clicked}
						sprites={sprites}
					/>
				</div>
				<Button variant='primary' onClick={(e) => def(e)}>
					Add a Sprite
				</Button>
			</div>
		</div>
	);
};
export default MyTab;
