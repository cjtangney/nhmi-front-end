import React from 'react';

//import './Tiles.css';

const NavListItem = (e) => {
	return (
    <li className={e.liClassName}>
      <a data-target='' tag={e.aTag} onClick={e.updateAttractions} >{e.aText}</a>
    </li>
	);
}

export { NavListItem };