import React from 'react'
import travel from '../../assets/images/travel-img.png'
import './style.scss'
import { Link } from 'react-router-dom'

const Travel = () => {
  return (
    <div id='travel'>
        <div className='text-container'>
            <h1>High Flyer</h1>
            <h3>Built for (spontaneous) travel.</h3>
            <div className='paragraph'>
                <p>No matter where your next grand tour takes you, Atlas is there as your co-pilot, with bespoke flight benefits for when you're ready to go on the spur of the moment.</p>
            </div>
        </div>

        <div className='img-container'>
            <img src={travel} alt='travel' />
        </div>
        <div className='img-paragraph'>
            <p>Bespoke flight benefits, inside Atlas app.</p>
        </div>

        <div className='grid-container'>
            <div className='grid-item'>
                <h3>5x points with BLADE</h3>
            </div>
            <div className='grid-item'>
                <p>Exclusive reward for Atlas cardholders on all BLADE helicopter rides and flights.</p>
            </div>

            <div className='grid-item'>
                <h3>CLEAR Plus membership</h3>
            </div>

            <div className='grid-item'>
                <p>Fast forward through airport security with included CLEAR Plus annual membership.</p>
            </div>

            <div className='grid-item'>
                <h3>Cancel flights without fees</h3>
            </div>

            <div className='grid-item'>
                <p>Change or cancel any flight, at any time, for any reason and get fees reimbursed up to $600 a year.</p>
            </div>

        </div>

        <div className='visa'>
            <h3>+</h3>
            <h3>Visa Infinite Benefits</h3>
            <p>Priority Pass, Luxury Hotel Collection,
            no foreign transaction fees, and more.</p>
            <Link to="/visa-infinte">Discover</Link>
        </div>
      
    </div>
  )
}

export default Travel
