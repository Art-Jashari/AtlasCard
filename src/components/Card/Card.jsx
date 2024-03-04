import React from 'react'
import cardLady from '../../assets/videos/card-woman.mp4'
import front from '../../assets/images/card-front.png'
import back from '../../assets/images/card-back.png'
import './style.scss'

export const Card = () => {
  return (
    <div id='card'>
      <div className='video-container'>
        <video src={cardLady} autoPlay={true} loop/>
        <p>The world in your hand, with atlas card.</p>
      </div>

      <div className='text-container'>
        <h1>Head Turner</h1>
        <h3>Designed to shatter the norm</h3>
        <div className='paragraph'>
            <p>Atlas is crafted to mirror our uncommon obsession with every single detail, always in pursuit of elevating you above the crowd, while also enhancing your privacy. </p>
        </div>

        <div className='card-container'>
            <div className='card-sides'>

                <div className='front-card'>
                    <img src={front} alt='front of the card' />
                </div>

                <div className='back-card'>
                    <img src={back} alt='back of the card' />
                </div>

            </div>
        </div>

        <div className='img-paragraph'>
            <p>Designed and engineered, front to back.</p>
        </div>

        <div className='grid-container'>
            <div className='grid-item'>
                <h3>Advanced construction</h3>
            </div>
            <div className='grid-item'>
                <p>Made from 21 grams of high density steel, CNC-milled and engraved, then polished to a brilliant mirror finish that is unlike any card.</p>
            </div>

            <div className='grid-item'>
                <h3>Enhanced privacy</h3>
            </div>

            <div className='grid-item'>
                <p>With no visible card number on its surface, Atlas keeps your privacy where it belongs, in your own hands.</p>
            </div>

            <div className='grid-item'>
                <h3>Personalized for you</h3>
            </div>

            <div className='grid-item'>
                <p>Designed front to back, Atlas card features tone-on-tone graphics and a personal icon of your choice by your name. </p>
            </div>

        </div>
    </div>


    </div>
  )
}


