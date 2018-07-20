import React from 'react';

import Image1 from '../res/img/home-carousel-02.jpg';
import Image2 from '../res/img/home-carousel-03.jpg';
import Image3 from '../res/img/home-carousel-04.jpg';

import './Cards.css';

const CardImgTop = (e) => {
	return (
		/* CARD */
		<div className='card img-top'>
			<div className='card-img'>
				<img src={Image1} alt='An image' width='100%' />
			</div>
			<div className='card-body'>
				Card body. A bunch of text can go here. Elit magnis a ultricies parturient lectus lacus adipiscing vestibulum consectetur posuere a ullamcorper condimentum a nostra consequat a fames vehicula natoque imperdiet tristique justo vestibulum scelerisque euismod. Quis imperdiet dis vulputate vestibulum netus senectus risus mi ut non condimentum parturient in duis ultrices.
			</div>
			<div className='card-footer'>
				Card footer. Can put things like buttons here, etc
			</div>
		</div>
	);
}

const CardImgLeft = (e) => {
	return (
		/* CARD */
		<div className='card img-left'>
			<div className='card-img'>
				<img src={e.imgSrc} alt={e.altTxt} />
			</div>
			<div className='card-body'>
				{e.cardBody}
			</div>
		</div>
	);
}

const CardImgRight = (e) => {
	return (
		/* CARD */
		<div className='card img-right'>
			<div className='card-body'>
				{e.cardBody}
			</div>
			<div className='card-img'>
				<img src={e.imgSrc} alt={e.altTxt} />
			</div>
		</div>
	);
}

const CardHomeHero = (e) => {
	return (
		/* CARD */
		<div className='card homepage-hero text-center'>
			<div className='card-header'>
				<h1>Welcome to the New Hampshire Mountain Inn!</h1>
			</div>
			<div className='card-body'>
				For over 200 years, the warmth of the blazing fireplace in the foyer of the New Hampshire Mountain Inn has been welcoming guests. Today, tuckered-out skiers, joyous bridal parties, couples browsing for antiques, and bona fide "foodies" join locals from the Lakes Region of New Hampshire in enjoying one of New England's most venerable hospitality options.
			</div>
			<div className='card-footer'>
				<button className='btn btn-lg'>Book your stay today!</button>
			</div>
		</div>
	);
}

const CardRoomsHero = (e) => {
	return (
		/* CARD */
		<div className='card rooms-hero text-center'>
			<div className='card-header'>
				<h1>New Hampshire Mountain Inn Room Choices</h1>
			</div>
			<div className='card-body'>
				<p>Whether you're looking for a quaint room for the evening or an extravagant suite for a weekend getaway, we're certain to have something suited to your tastes. Select one of the rooms below to learn more!</p>
				<sub>All rates are based on double occupancy. An fee of $35.00 per night will be charged per additional guest.</sub>
			</div>
			<div className='card-footer'>
				<button className='btn btn-lg'>Book your stay today!</button>
			</div>
		</div>
	);
}

const CardRooms = (e) => {
	return (
		/* CARD */
		<div className='card card-rooms'>
			<div className='card-img'>
				<img src={e.imgSrc} alt={e.altTxt} width='100%' />
			</div>
			<div className='card-header'>
				<h5>{e.cardHeader}</h5>
			</div>
			<div className='card-body'>
				{e.cardBody}
			</div>
			<div className='card-footer'>
				{e.cardFooter}
			</div>
		</div>
	);
}

const CardInfo = (e) => {
	return(
		/* CARD */
		<div className='card card-rooms centered'>
			<div className='card-body'>
				{e.cardBody}
			</div>
		</div>
	);
}

export { CardImgTop, CardImgLeft, CardImgRight, CardHomeHero, CardRoomsHero, CardRooms, CardInfo };