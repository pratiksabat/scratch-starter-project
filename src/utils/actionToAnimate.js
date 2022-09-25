const ACTIONS_TO_ANIMATIONS = [
	'',
	'',
	'',
	'',
	'translate-x-',
	'',
	'rotate-',
	'-rotate-',
	'rotate-',
	'translate-x-',
	'inset-x-',
	'inset-y-',
];
const actionToAnimate = (action) => {
	return ACTIONS_TO_ANIMATIONS[action];
};

export default actionToAnimate;
