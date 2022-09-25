import React, { useRef, useState } from 'react';
import { useDrop } from 'react-dnd';
import MidArea from './components/MidArea';
import Sidebar from './components/Sidebar';
import EventData from './utils/events.json';
import LookData from './utils/looks.json';
import MotionData from './utils/motions.json';
import SoundData from './utils/sounds.json';
export default function App({ collectData, abcd }) {
	const ref = useRef(null);
	const [actions, setSelectedActions] = useState([]);
	const [{ isOver }, drop] = useDrop(() => ({
		accept: 'card',
		drop: (item) => addActionToMidArea(item),
		collect: (monitor) => ({
			isOver: !!monitor.isOver(),
		}),
	}));

	const getVal = (id, type, v) => {
		if (type === 'motion') {
			MotionData[parseInt(id) - 4].text = v;
		} else if (type === 'event') {
			const res = EventData.filter((event) => event.id === id);
		} else if (type === 'looks') {
			LookData[parseInt(id) - 13].text = v;
		} else {
			SoundData[parseInt(id) - 17].text = v;
		}
	};

	const addActionToMidArea = (item) => {
		if (item.type === 'motion') {
			const res = MotionData.filter((motion) => motion.id === item.id);
			setSelectedActions((actions) => [...actions, res[0]]);
		} else if (item.type === 'event') {
			const res = EventData.filter((event) => event.id === item.id);
			setSelectedActions((actions) => [...actions, res[0]]);
		} else if (item.type === 'looks') {
			const res = LookData.filter((look) => look.id === item.id);
			setSelectedActions((actions) => [...actions, res[0]]);
		} else {
			const res = SoundData.filter((sound) => sound.id === item.id);
			setSelectedActions((actions) => [...actions, res[0]]);
		}
	};

	const performAction = (d) => {
		collectData(d);
	};

	const reorderActions = (dragIndex, hoverIndex) => {
		setTimeout(() => {
			const idx1 = actions.findIndex(
				(action) => action.id === dragIndex
			);
			const t1 = actions[idx1];
			const idx2 = actions.findIndex(
				(action) => action.id === hoverIndex
			);
			actions[idx1] = actions[idx2];
			actions[idx2] = t1;
			setSelectedActions(actions);
		}, 3000);
	};

	return (
		<div className='bg-blue-100 font-sans'>
			<div className='h-screen overflow-auto flex flex-row  '>
				<div className='flex-1 h-screen overflow-auto flex flex-row bg-white border-t border-r border-gray-200 rounded-tr-xl mr-2'>
					<Sidebar getVal={getVal} />
					<MidArea
						actions={actions}
						refff={drop}
						getVal={getVal}
						performAction={performAction}
						abcd={abcd}
						reorderActions={reorderActions}
					/>
				</div>
			</div>
		</div>
	);
}
