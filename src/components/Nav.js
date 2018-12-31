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
			  					{e.roomData.map(data=>
		  							data.map(room=>
		  								<li className='menu-item' key={room['_id']}><a href={'/rooms/' + e.createSlug(room['Name'])}>{room['Name']}</a></li>
		  							)
			  					)}
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
		        {/* dining */}
		        <details className='accordion d-block'>
		          <summary className='accordion-header'>
		            <a href='/dining'>DINING &nbsp;</a>
		            <i className='icon icon-arrow-left mr-1 dark-grey'></i>
		          </summary>
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
		              <li className='menu-item'><a href='/about-us'>About the Inn</a></li>
		              <li className='menu-item'><a href='/policies'>Policies</a></li>
		              <li className='menu-item'><a href='/attractions'>Area Attractions</a></li>
		              <li className='menu-item'><a href='/about-us#directions'>Directions</a></li>
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
		<div className='navbar hide-md' id='desktop-nav'>
		  <section className='navbar-section'>
		  	<a href='/'><img src={Logo} className='navbar-logo' alt='New Hampshire Mountain Inn' /></a>
		  </section>
		  <section className='navbar-section' id='desktop-links'>
				{/* rooms */}		
		  	<div className='popover popover-bottom'>
		  		<a className='btn btn-link' onMouseEnter={onEnter} onMouseLeave={onExit}>ROOMS &amp; RATES</a>
		  		<div className='popover-container'>
		  			<div className='card'>
		  				<ul className='menu menu-nav'>
		  					<li className='menu-item'><a href='/rooms'>Our Rooms</a></li>
		  					{e.roomData.map(data=>
	  							data.map(room=>
	  								<li className='menu-item' key={room['_id']}><a href={'/rooms/' + e.createSlug(room['Name'])}>{room['Name']}</a></li>
	  							)
		  					)}
						  </ul>
		  			</div>
		  		</div>
		  	</div>

		  	{/* specials */}
		  	<div className='popover popover-bottom'>
		    	<a className='btn btn-link' onMouseEnter={onEnter} onMouseLeave={onExit}>SPECIALS</a>
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

		  	{/* events */}
		    <div className='popover popover-bottom'>
		    	<a className='btn btn-link' onMouseEnter={onEnter} onMouseLeave={onExit}>EVENTS</a>
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

  			{/* dining */}
		    <div className='popover popover-bottom'>
		    	<a href='/dining' className='btn btn-link' onMouseEnter={onEnter} onMouseLeave={onExit}>DINING</a>
	    	</div>	

		  	{/* about us */}
	    	<div className='popover popover-bottom'>
		    	<a className='btn btn-link' onMouseEnter={onEnter} onMouseLeave={onExit}>ABOUT US</a>
		    	<div className='popover-container'>
		    		<div className='card'>
			    		<ul className='menu menu-nav'>
	              <li className='menu-item'><a href='/about-us'>About the Inn</a></li>
	              <li className='menu-item'><a href='/policies'>Policies</a></li>
	              <li className='menu-item'><a href='/attractions'>Area Attractions</a></li>
	              <li className='menu-item'><a href='/about-us#directions'>Directions</a></li>
            	</ul>
            </div>
		    	</div>
		    </div> 
		  </section>
		</div>
	);
}

export { MobileNav, Nav };