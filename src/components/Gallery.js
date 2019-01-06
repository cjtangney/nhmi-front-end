import React from 'react';

import './Gallery.css';

class WeddingGallery extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			imgs: props.imgs,
			activeImg: ''
		}
	}
	imgZoom = (e) => {
    document.getElementById('wedding-lightbox').classList.add('active');
    this.setState({
    	activeImg: e.target.src
    });
  }
  imgClose = () => {
    document.getElementById('wedding-lightbox').classList.remove('active'); 
    this.setState({
    	activeImg: ''
    });
  }
	render(){
		return(
			<div>
				<div className='columns' id='wedding-gallery'>
					{this.state.imgs.map(img =>
						<div className='column col-3 text-center'>
		          <img className='thumbnail' src={img} onClick={e => this.imgZoom(e)}/>
		        </div>	
					)}
	      </div>
	      <div className='modal modal-lg' id='wedding-lightbox' onClick={this.imgClose}>
	        <a data-target='' className='modal-overlay' aria-label='Close'></a>
	        <div className='modal-container'>
	        	<div className='modal-header'>
				      <a data-target='' className='btn btn-clear float-right' aria-label='Close' onClick={this.imgClose}></a>
				    </div>
	          <div className='modal-body'>
	            <div className='content'>
	              <img className='img-responsive' src={this.state.activeImg} alt='' />
	            </div>
	          </div>
	        </div>
	      </div>
      </div>
		)
	}
}

export { WeddingGallery };