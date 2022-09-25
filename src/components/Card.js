import React, { useRef, useState } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import CustomIcon from './CustomIcon';
import DropDown from './Dropdown';
const Card = ({
	id,
	type,
	className,
	textBefore,
	text,
	textStyle,
	dropdown,
	dropdownOptions,
	dropdownStyle,
	icon,
	iconClassName,
	textAfter,
	getVal,
	source,
	performAction,
	reorderActions,
}) => {
	const [state, setState] = useState({
		value: text,
		show: text,
	});
	// const debounce = (func) => {
	// 	let timer;
	// 	return function (...args) {
	// 		const context = this;
	// 		if (timer) clearTimeout(timer);
	// 		timer = setTimeout(() => {
	// 			timer = null;
	// 			func.apply(context, args);
	// 		}, 500);
	// 	};
	// };

	// const optimizedVersion = (dragIndex, hoverIndex) =>
	// 	useCallback(debounce(reorderActions(dragIndex, hoverIndex)));

	const handleChange = (e) => {
		setState({ value: e.target.value });
		getVal(id, type, e.target.value);
	};

	const ref = useRef(null);
	const [{ handlerId }, drop] = useDrop({
		accept: 'card',
		collect(monitor) {
			return {
				handlerId: monitor.getHandlerId(),
			};
		},
		hover(item, monitor) {
			if (source === 'midarea') {
				if (!ref.current) {
					return;
				}
				const dragIndex = item.id;
				const hoverIndex = id;
				// Don't replace items with themselves
				if (dragIndex === hoverIndex) {
					return;
				}
				// Determine rectangle on screen
				const hoverBoundingRect =
					ref.current?.getBoundingClientRect();
				// Get vertical middle
				const hoverMiddleY =
					(hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
				// Determine mouse position
				const clientOffset = monitor.getClientOffset();
				// Get pixels to the top
				const hoverClientY = clientOffset.y - hoverBoundingRect.top;
				// Only perform the move when the mouse has crossed half of the items height
				// When dragging downwards, only move when the cursor is below 50%
				// When dragging upwards, only move when the cursor is above 50%
				// Dragging downwards
				if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
					return;
				}
				// Dragging upwards
				if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
					return;
				}
				// Time to actually perform the action
				reorderActions(dragIndex, hoverIndex);
				// Note: we're mutating the monitor item here!
				// Generally it's better to avoid mutations,
				// but it's good here for the sake of performance
				// to avoid expensive index searches.
				item.id = hoverIndex;
			}
		},
	});
	const [{ isDragging }, drag] = useDrag(() => ({
		type: 'card',
		item: {
			id,
			type,
			text: state.value,
		},
		collect: (monitor) => ({
			isDragging: !!monitor.isDragging(),
		}),
	}));
	drag(drop(ref));
	const abc = (e) => {
		if (source === 'midarea') {
			const a = {
				id,
				type,
				className,
				textBefore,
				text,
				textStyle,
				icon,
				iconClassName,
				textAfter,
				getVal,
				source,
				performAction,
			};
			performAction(a);
		}
	};

	return (
		<div
			className={className}
			ref={ref}
			onClick={(e) => abc(e)}
			data-handler-id={handlerId}>
			{textBefore}
			<div>
				{dropdown && dropdownStyle && (
					<DropDown
						label={dropdown}
						options={dropdownOptions}
						style={dropdownStyle}
					/>
				)}
			</div>
			{text && (
				<input
					type='text'
					onChange={($event) => handleChange($event)}
					value={state.value}
					className={textStyle}
				/>
			)}
			{icon && iconClassName && (
				<CustomIcon
					name={icon}
					size={15}
					className={iconClassName}
				/>
			)}
			{textAfter}
		</div>
	);
};

export default Card;
