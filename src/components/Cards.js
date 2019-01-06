import React from 'react';
import './Cards.css';

const CardImgTop = (e) => {
	return (
		/* CARD */
		<div className='card img-top'>
			<div className='card-img'>
				<img src={e.imgSrc} alt={e.altTxt} width='100%' />
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

const CardTextHero = (e) => {
	return (
		/* CARD */
		<div className='card text-hero text-center'>
			<div className='card-header'>
				<h1>{e.cardHeader}</h1>
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

const CardImgLeftHero = (e) => {
	return (
		/* CARD */
		<div className='card img-hero img-left'>
			<div className='card-img'>
				<img src={e.imgSrc} alt={e.altTxt} />
			</div>
			<div className='card-body'>
				{e.cardBody}
			</div>
		</div>
	);
}

	const CardImgRightHero = (e) => {
	return (
		/* CARD */
		<div className='card img-hero img-right'>
			<div className='card-body'>
				{e.cardBody}
			</div>
			<div className='card-img'>
				<img src={e.imgSrc} alt={e.altTxt} />
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

export { CardImgTop, CardImgLeft, CardImgRight, CardTextHero, CardImgLeftHero, CardImgRightHero, CardRooms, CardInfo };