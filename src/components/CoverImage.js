import React from 'react';

import './CoverImage.css';

const CoverImage = (e) => {
	return(
		/* COVER IMAGE */
		<section>
	  	<img src={e.src} alt='The New Hampshire Mountain Inn' className='img-responsive img-fit-cover' id='cover-image' />
	  </section>
	);
}

const RoomCoverImage = (e) => {
	return(
		<section>
			<img src={e.src} alt='The New Hampshire Mountain Inn' className='img-responsive img-fit-cover' id='room-cover-image' />
		</section>
	);
}

export { CoverImage, RoomCoverImage };