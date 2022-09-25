import React, { useEffect, useState } from 'react';
import ReactHowler from 'react-howler';
import CustomToast from '../components/CustomToast';
export default function CatSprite({ style, b, d, sprite }) {
	const [first, setfirst] = useState(style);
	useEffect(() => {
		setfirst(style);
	}, [style]);
	console.log(first);
	return (
		<div>
			{b.map((dt, key) => {
				return <CustomToast key={key} data={dt} />;
			})}
			{d && (
				<ReactHowler
					src='http://goldfirestudios.com/proj/howlerjs/sound.ogg'
					playing={true && d.length > 0}
				/>
			)}
			{sprite.type === 'svg' ? (
				<img src={sprite.path} className={first} />
			) : (
				<img
					src={sprite.path}
					className={first}
					width={100}
					height={100}
				/>
			)}
		</div>
	);
}
