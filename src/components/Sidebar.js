import React from 'react';
import EventData from '../utils/events.json';
import LookData from '../utils/looks.json';
import MotionData from '../utils/motions.json';
import SoundData from '../utils/sounds.json';
import Block from './Block';
import Card from './Card';
export default function Sidebar({ getVal }) {
	const goToParent = (e, label) => {
		console.log(label);
		window.scrollTo({
			top:
				label === 'Motion'
					? motion.current.offsetTop
					: label === 'Looks'
					? look.current.offsetTop
					: label === 'Sound'
					? sound.current.offsetTop
					: event.current.offsetTop,
			behavior: 'smooth',
		});
	};
	return (
		<div className='overflow-hidden flex flex-row'>
			<div className='flex-1 overflow-hidden flex flex-row bg-white border-r w-16 justify-center'>
				<Block goToParent={goToParent} />
			</div>
			<div className='w-60 flex-none overflow-y-auto flex flex-col items-start p-2 border-r border-gray-200'>
				<div className='font-bold'> {'Events'} </div>
				{EventData.map((event, key) => {
					return (
						<Card
							id={event.id}
							type={event.type}
							className={event.containerStyle}
							textBefore={event.textBefore}
							text={event.text}
							textStyle={event.textStyle}
							dropdown={event.dropdown}
							dropdownStyle={event.dropdownStyle}
							dropdownOptions={event.dropdownOptions}
							icon={event.icon}
							iconClassName={event.iconStyle}
							textAfter={event.textAfter}
							key={key}
							getVal={getVal}
							source='sidebar'
						/>
					);
				})}
				<div className='font-bold'> {'Motion'} </div>
				{MotionData.map((motion, key) => {
					return (
						<Card
							id={motion.id}
							type={motion.type}
							className={motion.containerStyle}
							textBefore={motion.textBefore}
							text={motion.text}
							textStyle={motion.textStyle}
							dropdown={motion.dropdown}
							dropdownStyle={motion.dropdownStyle}
							dropdownOptions={motion.dropdownOptions}
							icon={motion.icon}
							iconClassName={motion.iconStyle}
							textAfter={motion.textAfter}
							key={key}
							getVal={getVal}
							source='sidebar'
						/>
					);
				})}
				<div className='font-bold'> {'Looks'} </div>
				{LookData.map((look, key) => {
					return (
						<Card
							id={look.id}
							type={look.type}
							className={look.containerStyle}
							textBefore={look.textBefore}
							text={look.text}
							textStyle={look.textStyle}
							dropdown={look.dropdown}
							dropdownStyle={look.dropdownStyle}
							dropdownOptions={look.dropdownOptions}
							icon={look.icon}
							iconClassName={look.iconStyle}
							textAfter={look.textAfter}
							key={key}
							getVal={getVal}
							source='sidebar'
						/>
					);
				})}
				<div className='font-bold'> {'Sounds'} </div>
				{SoundData.map((sound, key) => {
					return (
						<Card
							id={sound.id}
							type={sound.type}
							className={sound.containerStyle}
							textBefore={sound.textBefore}
							text={sound.text}
							textStyle={sound.textStyle}
							dropdown={sound.dropdown}
							dropdownStyle={sound.dropdownStyle}
							dropdownOptions={sound.dropdownOptions}
							icon={sound.icon}
							iconClassName={sound.iconStyle}
							textAfter={sound.textAfter}
							key={key}
							getVal={getVal}
							source='sidebar'
						/>
					);
				})}
			</div>
		</div>
	);
}
