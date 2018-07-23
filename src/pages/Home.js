import React from 'react';

import '../components/spectre-overrides.css';
import '../../node_modules/spectre.css/dist/spectre-exp.min.css';
import '../../node_modules/spectre.css/dist/spectre-icons.min.css';

import Image1 from '../res/img/home-carousel-01.jpg';
import Image2 from '../res/img/home-carousel-02.jpg';
import Image3 from '../res/img/home-carousel-03.jpg';
//import Image4 from '../res/img/home-carousel-04.jpg';

import { MobileNav, Nav } from '../components/Nav';
import { CoverImage } from '../components/CoverImage';
import { CardImgTop, CardImgLeft, CardImgRight, CardHomeHero } from '../components/Cards';
import { Footer } from '../components/Footer';
import { DirectionPane } from '../components/Directions';

class Home extends React.Component {
  render() {
    return (
      <div>
      	<header className='header-container'>
      		<MobileNav />
      		<Nav />
      	</header>
      	<div>
      		<CoverImage imgSrc={Image1}/>
      	</div>
    		<div className='columns'>
    			<div className='column col-8 col-mx-auto'>
    				<CardHomeHero />
    			</div>
    			<div className='column col-8 col-mx-auto' align='center'>
    				<div id='TA_cdsratingsonlywide707' className='TA_cdsratingsonlywide'>
							<ul id='PV9REzmVV' className='TA_links N0yUS72'>
								<li id='aIM8WP2p' className='en0YNQ'>
									<a target='_blank' rel='noopener noreferrer' href='https://www.tripadvisor.com/'><img src='https://www.tripadvisor.com/img/cdsi/img2/branding/tripadvisor_logo_transp_340x80-18034-2.png' alt='TripAdvisor'/></a>
								</li>
							</ul>
						</div>
						<script async src='https://www.jscache.com/wejs?wtype=cdsratingsonlywide&amp;uniq=707&amp;locationId=269789&amp;lang=en_US&amp;border=false&amp;display_version=2'></script>
    			</div>
    		</div>

    		<div className='hide-md'>
					<CardImgLeft imgSrc={Image2} altTxt='Alt text' cardBody={
            'Card body. A bunch of text can go here. Elit magnis a ultricies parturient lectus lacus adipiscing vestibulum consectetur posuere a ullamcorper condimentum a nostra consequat a fames vehicula natoque imperdiet tristique justo vestibulum scelerisque euismod. Quis imperdiet dis vulputate vestibulum netus senectus risus mi ut non condimentum parturient in duis ultrices.'
          }/>
					<CardImgRight imgSrc={Image3} altTxt='Alt text' cardBody={
            'Card body. A bunch of text can go here. Elit magnis a ultricies parturient lectus lacus adipiscing vestibulum consectetur posuere a ullamcorper condimentum a nostra consequat a fames vehicula natoque imperdiet tristique justo vestibulum scelerisque euismod. Quis imperdiet dis vulputate vestibulum netus senectus risus mi ut non condimentum parturient in duis ultrices.'
          }/>
				</div>

				<div className='show-md'>
      		<div className='columns'>
      			<div className='column col-12'>
      				<CardImgTop />
      			</div>
      			<div className='column col-12'>
      				<CardImgTop />
      			</div>
      			<div className='column col-12'>
      				<CardImgTop />
      			</div>
      		</div>
      	</div>
      	<DirectionPane title='Having trouble finding us?'/>
      	<Footer />
      </div>
    );
  }
}

export default Home;
