import React from 'react';
import actionToAnimate from '../utils/actionToAnimate';
import CatSprite from './CatSprite';
export default function PreviewArea({ actions, clicked, sprites }) {
	const a = [],
		b = [],
		c = [],
		d = [];
	let style = '';
	if (clicked) {
		actions.forEach((element) => {
			if (element.type === 'event') a.push(element);
			if (element.type === 'looks') b.push(element);
			if (element.type === 'motion') c.push(element);
			if (element.type === 'sounds') d.push(element);
		});
	} else {
		if (actions.type === 'event') a.push(actions);
		if (actions.type === 'looks') b.push(actions);
		if (actions.type === 'motion') c.push(actions);
		if (actions.type === 'sounds') d.push(actions);
	}
	style =
		'transform transition-all ' +
		c.map((action) => actionToAnimate(action.id) + action.text).join(' ');
	return sprites.map((sprite, key) => {
		return (
			<CatSprite style={style} b={b} d={d} sprite={sprite} key={key} />
		);
	});
}
