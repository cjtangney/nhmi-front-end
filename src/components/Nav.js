import React from 'react';

import Logo from '../res/img/new-hampshire-mountain-inn-logo.png';

import './Nav.css';

const MobileNav = (e) => {
	const showMenu = () => {
		document.getElementById('mobile-links').classList.toggle('d-hide');
	}

	return (
		/* MOBILE NAV */
		<div className='navbar show-md mobile-bar fixed'>
		  <section className='navbar-section fixed' id='hamburger-btn' onClick={showMenu}>
		    <a data-target='' className='hamburgerBtn'><i className='material-icons'>menu</i></a>
		  </section>
		  <section className='navbar navbar-section d-hide' id='mobile-links'>

		    <ul className='menu menu-nav'>
		      <li className='menu-item'>
		        {/* rooms */}
		        <details className='accordion d-block'>
		          <summary className='accordion-header'>
		            ROOMS &amp; RATES &nbsp;
		            <i className='icon icon-arrow-left mr-1 dark-grey'></i>
		          </summary>
		          <div className='accordion-body'>
		            <ul className='menu menu-nav'>
		            	<li className='menu-item'><a href='/rooms'>Our Rooms</a></li>
		              <li className='menu-item'><a href='/courtyard-north'>Courtyard - North</a></li>
		              <li className='menu-item'><a href=''>Courtyard - South</a></li>
		              <li className='menu-item'><a href=''>Eagle Pond Room</a></li>
		              <li className='menu-item'><a href=''>Humming Bird Room</a></li>
		              <li className='menu-item'><a href=''>Kearsarge Room</a></li>
		              <li className='menu-item'><a href=''>Library Room</a></li>
		              <li className='menu-item'><a href=''>Meadow Room</a></li>
		              <li className='menu-item'><a href=''>Quilt Room</a></li>
		              <li className='menu-item'><a href=''>Timber Room</a></li>
		              <li className='menu-item'><a href=''>Stableside Suite</a></li>
		              <li className='menu-item'><a href=''>Vanderbilt Suite</a></li>
		            </ul>
		          </div>
		        </details>
		      </li>

		      <li className='menu-item'>
		        {/* dining */}
		        <details className='accordion d-block'>
		          <summary className='accordion-header'>
		            DINING &nbsp;
		            <i className='icon icon-arrow-left mr-1 dark-grey'></i>
		          </summary>
		          <div className='accordion-body'>
		            <ul className='menu menu-nav'>
		              <li className='menu-item'><a href=''>Breakfast</a></li>
		              <li className='menu-item'><a href=''>Dinner</a></li>
		            </ul>
		          </div>
		        </details>
		      </li>

		      <li className='menu-item'>
		        {/* events */}
		        <details className='accordion'>
		          <summary className='accordion-header'>
		            EVENTS &nbsp;
		            <i className='icon icon-arrow-left mr-1 dark-grey'></i>
		          </summary>
		          <div className='accordion-body'>
		            <ul className='menu menu-nav'>
		              <li className='menu-item'><a href=''>Weddings</a></li>
		              <li className='menu-item'><a href=''>Corporate Gatherings</a></li>
		              <li className='menu-item'><a href=''>Reunions</a></li>
		            </ul>
		          </div>
		        </details>
		      </li>

		      <li className='menu-item'>
		        {/* specials */}
		        <details className='accordion'>
		          <summary className='accordion-header'>
		            SPECIALS &nbsp;
		            <i className='icon icon-arrow-left mr-1 dark-grey'></i>
		          </summary>
		          <div className='accordion-body'>
		            <ul className='menu menu-nav'>
		              <li className='menu-item'><a href=''>Ongoing Deals</a></li>
		              <li className='menu-item'><a href=''>Gift Certificates</a></li>
		              <li className='menu-item'><a href=''>Special Offers</a></li>
		            </ul>
		          </div>
		        </details>
		      </li>

		      <li className='menu-item'>
		        {/* about us */}
		        <details className='accordion'>
		          <summary className='accordion-header'>
		            ABOUT US &nbsp;
		            <i className='icon icon-arrow-left mr-1 dark-grey'></i>
		          </summary>
		          <div className='accordion-body'>
		            <ul className='menu menu-nav'>
		              <li className='menu-item'><a href=''>About the Inn</a></li>
		              <li className='menu-item'><a href=''>Policies</a></li>
		              <li className='menu-item'><a href=''>Area Attractions</a></li>
		              <li className='menu-item'><a href=''>Directions</a></li>
		            </ul>
		          </div>
		        </details>
		      </li>

		    </ul>

		  </section>
		</div>
	);
}

const Nav = (e) => {
	const onEnter = (e) => {
		e.target.classList.add('active');
	}
	const onExit = (e) => {
		e.target.classList.remove('active');
	}

	return (
		/* NAVBAR */
		<div className='navbar hide-md fixed' id='desktop-nav'>
		  <section className='navbar-section'>
		  	<a href='/'><img src={Logo} className='navbar-logo' alt='New Hampshire Mountain Inn' /></a>
		  </section>
		  <section className='navbar-section' id='desktop-links'>
		  	<div className='popover popover-bottom'>
		  		<a href='' className='btn btn-link' onMouseEnter={onEnter} onMouseLeave={onExit}>ROOMS &amp; RATES</a>
		  		<div className='popover-container'>
		  			<div className='card'>
		  				<ul className='menu menu-nav'>
		  					<li className='menu-item'><a href='/rooms'>Our Rooms</a></li>
						    <li className='menu-item'><a href='/courtyard-north'>Courtyard - North</a></li>
						    <li className='menu-item'><a href=''>Courtyard - South</a></li>
						    <li className='menu-item'><a href=''>Eagle Pond Room</a></li>
						    <li className='menu-item'><a href=''>Humming Bird Room</a></li>
						    <li className='menu-item'><a href=''>Kearsarge Room</a></li>
						    <li className='menu-item'><a href=''>Library Room</a></li>
						    <li className='menu-item'><a href=''>Meadow Room</a></li>
						    <li className='menu-item'><a href=''>Quilt Room</a></li>
						    <li className='menu-item'><a href=''>Timber Room</a></li>
						    <li className='menu-item'><a href=''>Stableside Suite</a></li>
						    <li className='menu-item'><a href=''>Vanderbilt Suite</a></li>
						  </ul>
		  			</div>
		  		</div>
		  	</div>
		  	<div className='popover popover-bottom'>
		    	<a href='' className='btn btn-link' onMouseEnter={onEnter} onMouseLeave={onExit}>DINING</a>
		    	<div className='popover-container'>
		    		<div className='card'>
			    		<ul className='menu menu-nav'>
	              <li className='menu-item'><a href=''>Breakfast</a></li>
	              <li className='menu-item'><a href=''>Dinner</a></li>
	            </ul>
	           </div>
		    	</div>
	    	</div>
				<div className='popover popover-bottom'>
		    	<a href='' className='btn btn-link' onMouseEnter={onEnter} onMouseLeave={onExit}>EVENTS</a>
		    	<div className='popover-container'>
		    		<div className='card'>
			    		<ul className='menu menu-nav'>
	              <li className='menu-item'><a href=''>Weddings</a></li>
	              <li className='menu-item'><a href=''>Corporate Gatherings</a></li>
	              <li className='menu-item'><a href=''>Reunions</a></li>
	            </ul>
            </div>
		    	</div>
		    </div>
				<div className='popover popover-bottom'>
		    	<a href='' className='btn btn-link' onMouseEnter={onEnter} onMouseLeave={onExit}>SPECIALS</a>
		    	<div className='popover-container'>
		    		<div className='card'>
			    		<ul className='menu menu-nav'>
	              <li className='menu-item'><a href=''>Ongoing Deals</a></li>
	              <li className='menu-item'><a href=''>Gift Certificates</a></li>
	              <li className='menu-item'><a href=''>Special Offers</a></li>
	            </ul>
            </div>
		    	</div>
		    </div>
	    	<div className='popover popover-bottom'>
		    	<a href='' className='btn btn-link' onMouseEnter={onEnter} onMouseLeave={onExit}>ABOUT US</a>
		    	<div className='popover-container'>
		    		<div className='card'>
			    		<ul className='menu menu-nav'>
	              <li className='menu-item'><a href=''>About the Inn</a></li>
	              <li className='menu-item'><a href=''>Policies</a></li>
	              <li className='menu-item'><a href=''>Area Attractions</a></li>
	              <li className='menu-item'><a href=''>Directions</a></li>
            	</ul>
            </div>
		    	</div>
		    </div>
		  </section>
		</div>
	);
}

export { MobileNav, Nav };