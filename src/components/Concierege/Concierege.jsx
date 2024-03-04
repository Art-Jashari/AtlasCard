import React from 'react'
import chatImg from '../../assets/images/chat-img.png'
import wallet from '../../assets/images/wallet.png'
import './style.scss'

export const Concierege = () => {
  return (
    <div id='concierege'>
      <div className='text-container'>
            <h1>Truly Personal</h1>
            <h3>At your beck and call (or text).</h3>
            <div className='paragraph'>
                <p>Experience handcrafted support, with your own dedicated personal advisor who is on hand to fulfill any request, from last-minute dinner plans to deep dive sessions.</p>
            </div>
        </div>

        <div className='chat-img-container'>
            <img src={chatImg} alt='Chat image' />
        </div>
        <div className='img-paragraph'>
            <p>Your personal advisor, now in iMessage.</p>
        </div>

        <div className='grid-container'>
            <div className='grid-item'>
                <h3>Personal advisor</h3>
            </div>
            <div className='grid-item'>
                <p>Going to exceptional lengths to know your preferences and tastes, your advisor is here to provide truly personal support.</p>
            </div>

            <div className='grid-item'>
                <h3>1 on 1 sessions</h3>
            </div>

            <div className='grid-item'>
                <p>For those times when it takes more than a text or a phone call, your personal advisor is just a quick booking away for a video call.</p>
            </div>

            <div className='grid-item'>
                <h3>Experiences concierge</h3>
            </div>

            <div className='grid-item'>
                <p>From last-minute table reservations, to sold out events, your personal advisor is on hand to help you have a lifetime experience.</p>
            </div>

        </div>

        <div className='img-container'>
        <img src={wallet} alt=''/>
        <p>Your companion through every adventure.</p>
      </div>
    </div>
  )
}

