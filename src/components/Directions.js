import React from 'react';

import './Directions.css';

const DirectionPane = (e) => {
	return(
		<div className='panel directions'>
			<div className='panel-header'>
				<div className='panel-title'><h4>{e.title}</h4></div>
			</div>
			<div className='panel-body'>
				Map here
			</div>
		</div>
	);
}

export { DirectionPane };