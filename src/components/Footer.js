import React from 'react';

import './Footer.css';

const Footer = (e) => {
	return (
		<footer>
			<div className='navbar'>
			  <section className='navbar-section'>
			  	<strong>New Hampshire Mountain Inn</strong> &nbsp; &ndash; &copy; 2018
			  </section>
			  <section className='navbar-section'>
			  	<a href='' className='btn btn-link'>Contact Us</a>
			    <a href='/policies' className='btn btn-link'>Inn Policies</a>
			    <a href='' className='btn btn-link'>E-club</a>
			    <a href='' className='btn btn-link'>Accessibility Policy</a>
			  </section>
			</div>
		</footer>
	);
}

export { Footer };