import React from 'react';

//import './Tiles.css';

const Tile = (e) => {
	return (
		<div className="tile text-left">
      <div className="tile-content">
        <p className="tile-title text-primary text-large">{e.tileTitle}</p>
        <p className="tile-subtitle">{e.tileBody}</p>
      </div>
      <div className="tile-action">
      	{e.tileXtra}
      </div>
    </div>
	);
}

export { Tile };