import React from 'react'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
import './style.scss'

export const Benefits = () => {
  return (
    <div id='benefits'>
        <div className='text-container'>
            <h1> Executive, brief. </h1>
            <h3>Your next journey begins here.</h3>
            <div className='paragraph'>
                <p>With all the essentials you need out in the world, and nothing to limit your possibilities, here is everything Atlas has to offer.</p>
            </div>
        </div>

    

        <div className='grid-container'>

            <div className='grid-item'>
                <h3>Dining</h3>
                <p>Exclusive reservations with Atlas Supper Club</p>
                <p>Dedicated tables at partner restaurants</p>
                <p>Last-minute bookings</p>
                <p>Peak hours access</p>
            </div>

            <div className='grid-item'>
                <h3>Travel</h3>
                <p>5x points with BLADE on helicopter rides and flights</p>
                <p>CLEAR Plus membership</p>
                <p>Cancel flights without fees </p>            
            </div>

            <div className='grid-item'>
                <h3>Rewards &amp; Benefits</h3>
                <p>3x upgrade on top spending category</p>
                <p>1x points on every purchase</p>
                <p>One Medical membership</p>
                <p>Erewhon Cafe membership</p>
                <p>FUTURE fitness training membership</p>
            </div>

            <div className='grid-item'>
                <h3>Personal Advisor</h3>
                <p>Advisor dedicated to your account</p>
                <p>1 on 1 sessions with available video calls</p>
                <p>Personalized dining and experiences concierge</p>
            </div>

            <div className='grid-item'>
                <h3>Card</h3>
                <p>Charge card with no pre-set spending limits</p>
                <p>21 gram steel alloy, milled, engraved, and polished to a brilliant mirror shine</p>
                <p>Tone-on-tone card back, with your personal icon, and no card number</p>
                <p>Visa Infinite</p>
                <p>Handle with care, clean with a microfiber cloth </p>            
            </div>

            <div className='grid-item'>
                <h3>App</h3>
                <p>True native iOS app with buttery-smooth performance</p>
                <p>Dark Mode support</p>
                <p>Instant purchase notifications</p>
                <p>Unlimited virtual cards</p>
                <p>Apple Pay</p>            
            </div>
        </div>

        <div className='membership'>
            <Button variant='contained' component={Link} to="/request-invite">Become a founding member</Button>
            <p>$999/yr.</p>

        </div>

        
      
    </div>
  )
}


