import React from 'react'
import horse from '../../assets/images/supper-club.png'
import cucina from '../../assets/images/cucina.png'
import felix from '../../assets/images/felix.png'
import dining from '../../assets/images/dining-img.png'
import './style.scss'

const Dining = () => {
  return (
    <div id='supper-club'>

        <div className='text-container'>
            <h1>Taste Maker</h1>
            <h3>Meet Atlas Supper Club.</h3>
            <div className='paragraph'>
                <p>Skip past the endless waitlists and concierge calls that turn up empty handed. With Atlas, you have a seat at the table at today's most desirable restaurants. </p>
            </div>
        </div>

        <div className='horse-img'>
            <img src={horse}  alt='horse'/>
        </div>

        <div className='grid-container'>
            <div className='grid-item'>
                <h3>Dedicated reservations</h3>
            </div>
            <div className='grid-item'>
                <p>Access exclusive inventory at our restaurant partners including - Horses, Felix Trattoria, Cucina Alba, and more.</p>
            </div>

            <div className='grid-item'>
                <h3>Last-minute bookings</h3>
            </div>

            <div className='grid-item'>
                <p>With bookings available at short notice, you won't find yourself on a waitlist.</p>
            </div>

            <div className='grid-item'>
                <h3>Access duringpeak hours</h3>
            </div>

            <div className='grid-item'>
                <p>Members get seated at prime time, when availability is typically the hardest to get</p>
            </div>

        </div>

        <div className='img-grid'>

            <div className='grid-item'>
                <img src={dining} alt='dining' />
                <h4>Horses, LA, on atlas supper club.</h4>
            </div>

            <div className='grid-item'>
                <img src={felix} alt='felix' />
                <h4>Felix Trattoria, LA, On Atlas Supper Club.</h4>
            </div>

            <div className='grid-item'>
                <img src={cucina} alt='cucina' />
                <h4>Cucina Alba, NYC, On Atlas Supper Club.</h4>
            </div>

        </div>
      
    </div>
  )
}

export default Dining
