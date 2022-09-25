import React, { useState } from 'react';
import { Toast } from 'react-bootstrap';

const CustomToast = ({ data }) => {
	const [showA, setShowA] = useState(true);
	const toggleShowA = () => setShowA(!showA);
	return data && data.textAfter ? (
		<Toast
			show={showA}
			onClose={toggleShowA}
			delay={3000}
			autohide
			className='bg-purple-300 w-auto'>
			<Toast.Header>
				<strong className='me-auto'>
					Ms.Catty is {data.textBefore}ing
				</strong>
			</Toast.Header>
			<Toast.Body>{data.text}</Toast.Body>
		</Toast>
	) : (
		<Toast
			show={showA}
			onClose={toggleShowA}
			className='bg-red-400 w-auto'>
			<Toast.Header>
				<strong className='me-auto'>
					Ms.Catty is {data.textBefore}ing
				</strong>
			</Toast.Header>
			<Toast.Body>{data.text}</Toast.Body>
		</Toast>
	);
};

export default CustomToast;
