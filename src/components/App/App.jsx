import React from 'react'
import phone from '../../assets/images/phone-in-hand.png'
import appImg1 from '../../assets/images/app-img-1.png'
import appImg2 from '../../assets/images/app-img-2.png'
import appImg3 from '../../assets/images/app-img-3.png'
import './style.scss'

export const App = () => {
  return (
    <div id='app'>
        <div className='text-container'>
            <h1>Power Couple</h1>
            <h3>A dynamic duo of card + app.</h3>
            <div className='paragraph'>
                <p>Each conceived from the same first principles, Atlas shines with a true native app that raises the bar, from magical rewards to unlimited cards, and everything in between.</p>
            </div>
        </div>

        <div className='phone-img-container'>
            <img src={phone} alt='Phone in hand' />
        </div>
        <div className='img-paragraph'>
            <p>Far above the typical app experience.</p>
        </div>

        <div className='grid-container'>
            <div className='grid-item'>
                <h3>Dynamic rewards</h3>
            </div>
            <div className='grid-item'>
                <p>Get automatically upgraded to 3x points where you spend the most, plus 1x points on every purchase. Because there's more to a rewarding life than chasing points.</p>
            </div>

            <div className='grid-item'>
                <h3>Unlimited virtual cards</h3>
            </div>

            <div className='grid-item'>
                <p>Create a unique card for your next trip, or one to share with your assistant, or to go online shopping, or ... you get the idea.</p>
            </div>

            <div className='grid-item'>
                <h3>Intuitively powerful</h3>
            </div>

            <div className='grid-item'>
                <p>Buttery-smooth performance, support for features like Dark Mode, and endless details make an app that's a pleasure to use, day in, night out.</p>
            </div>

        </div>

        <div className='img-grid'>

            <div className='grid-item'>
                <img src={appImg1} alt='' />
                <h4>Your purchases, reimagined as moments.</h4>
            </div>

            <div className='grid-item'>
                <img src={appImg2} alt='' />
                <h4>Create and manage virtual cards.</h4>
            </div>

            <div className='grid-item'>
                <img src={appImg3} alt='' />
                <h4>Points upgrades, with dynamic rewards.</h4>
            </div>

        </div>

      
    </div>
  )
}


