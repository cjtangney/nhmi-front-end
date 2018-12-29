import React from 'react';

import Image1 from '../res/img/home-carousel-01.jpg';

import { CoverImage } from '../components/CoverImage';
//import { CardImgTop, CardImgLeft, CardImgRight, CardTextHero } from '../components/Cards';

class Policies extends React.Component {
  render() {
    return (
      <div>
      	<div>
      		<CoverImage imgSrc={Image1}/>
      	</div>
        <div className='container grid-xl'>
      		<div className='columns'>
      			<div className='column col-8 col-mx-auto text-center'>
              <div id='policies-divider' className='divider text-center' data-content='POLICIES'></div>
              <p>Here at the New Hampshire Mountain Inn, every visitor is important to us. In order to ensure that each guest has a great stay, we ask that you adhere to the following policies:</p>
              <table className='table text-center'>
                <tbody>
                  <tr>
                    <td><strong>Check-in</strong></td>
                    <td><strong>Check-out</strong></td>
                  </tr>
                  <tr>
                    <td>3:00 PM - 9:00 PM <sup>*</sup></td>
                    <td>11:00 AM</td>
                  </tr>
                </tbody>
              </table>
              <ul className='policy-list text-left'>
                <li><strong>Smoking - </strong>State law prohibits smoking inside any of the Inn's buildings. Non-compliance will result in a $500 cleaning fee plus additional costs for lost revenue. Designated outdoor smoking areas are available.</li>
                <li><strong>Extra Guests - </strong>A surcharge of $35 per day will be applied for an extra person. Our ability to accommodate additional guests is limited to specific guest rooms.</li>
                <li><strong>Open Flames - </strong>Guests may not use any form of open flame within the Inn's buildings. Non-compliance will result in a fine of $500 plus additional costs for lost revenue.</li>
              </ul>
      			</div>
          </div>
          <div className='columns'>
            <div className='column col-4'>
              <h4 className='text-center'>Reservation Policy</h4>
              <p>Rates are per room, per night based on double occupancy. An advanced payment is required for all reservations based on the number of days of your stay. A two-night minimum applies to some holiday and weekend reservations. Selected periods are subject to a three-night minimum. All rates are subject to a 9% NH Room & Meals Tax. One-night reservations must be paid in full. Stays of two or more nights require a 50% deposit. Reservations can be made by phone between 8:00 AM and 9:00 PM, or by using our secure, online reservation system. We accept Visa, MasterCard, American Express, Discover and cash. Rates and policies are subject to change and may vary during high volume periods.</p>
            </div>
            <div className='column col-4'>
              <h4 className='text-center'>Cancellation Policy</h4>
              <p>If your travel plans change and you must cancel your reservation, please call us at least 14 days prior to your arrival date to cancel your reservation. A full refund will be provided minus a $35 processing fee. Cancellations must also be confirmed via email. In the unlikely event that you must cancel with less than 14 days notice, shorten your stay or check out early, please understand that we must ask you to take responsibility for your entire reservation. If we can rebook your room(s), a full or partial refund will be made minus a $35 processing fee. A 30-day cancellation notice is required on whole house bookings and for some holidays and special events.</p>
            </div>
            <div className='column col-4'>
              <h4 className='text-center'>Gift Certificate Policy</h4>
              <p>Gift certificates are good towards a stay in any room, on any night, subject to availability and minimum night restrictions. All Inn Policies apply to gift certificates. New Hampshire Mountain Inn Gift Certificates expire in one year from date of purchase. They are non-refundable, non-transferable, and cannot be replaced if lost or stolen. If you are using a BedandBreakfast.com gift card you must notify us when making your reservation, or we reserve the right to refuse to honor them. They may not be combined with additional discounts or used for special offers or seasonal packages.</p>
            </div>
            <div className='column col-8 col-mx-auto text-center'>
              <h4>Pet Policy</h4>
              <p>Well-behaved dogs are welcome in either of our two pet friendly rooms. All pet bookings must be made by phone. During check-in, you will be asked to sign the following agreement as a condition for having a dog(s) on the New Hampshire Mountain Inn premises:</p>
              <ol className='policy-list text-left'>
                <li>I agree to be responsible for any and all damages caused by my dog(s) during my stay. I further agree to allow my credit card, which is on file, to be charged for any and all damages.</li>
                <li>Dogs are not permitted in the main building or on the exterior porches of the main building.</li>
                <li>Dogs are not permitted on the furniture. If you feel your dog may try to get on the furniture, ask the innkeeper for coverings.</li>
                <li>Dogs are not to be bathed in the tubs or showers.</li>
                <li>Dogs must be leashed when on Inn grounds.</li>
                <li>Housekeeping services will not be provided to rooms where dog(s) have been left unattended during housekeeping hours.</li>
                <li>The Inn requires that dog owners remove dog waste. The Inn provides waste bags, which should be deposited in the dumpster located adjacent to the barn.</li>
                <li>I attest that my dog(s) has not been attack trained. I further attest that all shots are up to date.</li>
                <li>I agree to be liable for injury to any person or any animal caused by my dog(s) while on the Inn premises.</li>
                <li>Dog(s) may remain in guest rooms unattended. Guests should bring a crate(s) if there is concern that the dog(s) may damage furnishings. Should your dog(s) cause a disturbance while you are out, you will be contacted by phone and agree to return to the Inn immediately.</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Policies;