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

export { CoverImage };