import _ from 'lodash';
import React, { useEffect, useState } from 'react';
import Card from './Card';

export default function MidArea({
	actions,
	refff,
	getVal,
	performAction,
	abcd,
	reorderActions,
}) {
	const [A, setA] = useState(actions);

	useEffect(() => {
		setA(_.uniqBy(actions, 'id'));
		abcd(_.uniqBy(actions, 'id'));
	}, [actions]);

	return (
		<div className='flex-1 h-full overflow-auto' ref={refff}>
			{'mid area'}
			{A.map((action, key) => {
				return (
					<Card
						id={action.id}
						type={action.type}
						className={action.containerStyle}
						textBefore={action.textBefore}
						text={action.text}
						textStyle={action.textStyle}
						dropdown={action.dropdown}
						dropdownStyle={action.dropdownStyle}
						dropdownOptions={action.dropdownOptions}
						icon={action.icon}
						iconClassName={action.iconStyle}
						textAfter={action.textAfter}
						key={key}
						getVal={getVal}
						source='midarea'
						performAction={performAction}
						reorderActions={reorderActions}
					/>
				);
			})}
		</div>
	);
}
