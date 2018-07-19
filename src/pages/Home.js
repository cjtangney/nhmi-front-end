import React from 'react';

import '../components/spectre-overrides.css';
import '../../node_modules/spectre.css/dist/spectre-exp.min.css';
import '../../node_modules/spectre.css/dist/spectre-icons.min.css';

import Image1 from '../res/img/home-carousel-01.jpg';

import { MobileNav, Nav } from '../components/Nav';
import { CoverImage } from '../components/CoverImage';
import { CardImgTop, CardImgLeft, CardImgRight, CardHomeHero } from '../components/Cards';
import { Footer } from '../components/Footer';
import { DirectionPane } from '../components/Directions'

class Home extends React.Component {
  render() {
    return (
      <div>
      	<header>
      		<MobileNav />
      		<Nav />
      	</header>
      	<div>
      		<CoverImage src={Image1}/>
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
					<CardImgLeft />
					<CardImgRight />
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
      	<DirectionPane />
      	<Footer />
      </div>
    );
  }
}

export default Home;
