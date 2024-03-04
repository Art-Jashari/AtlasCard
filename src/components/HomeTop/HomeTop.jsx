import React from 'react'
import card from '../../assets/images/atlas-card.png'
import bgRandomColor from '../../assets/functions/Functions'
import './style.scss'

export const HomeTop = () => {
 


 return (
    <div id='home' >
        <div className='background-div' style={{backgroundImage: `linear-gradient(to bottom, ${bgRandomColor()}, ${bgRandomColor()})`}}>
            <div className='home-top'>
        
                <h1>No Limits</h1>
    
                <img src={card} alt='card'/>
    
                <div className='paragraph'>
                  <p>This is your friend who scores the hottest tables in town, your passport to weekend getaways, and your guest pass to must-see events.
                  All brilliantly brought together in a card and app of uncompromising beauty and utility.
                  This is the beginning of a journey to a world with no limits. </p>
                </div>
    
                <h3>This is Atlas.</h3>

            </div>
        </div>
    </div>
    )
}


