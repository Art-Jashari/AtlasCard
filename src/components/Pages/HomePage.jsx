import React from 'react'
import { Header } from '../Header/Header'
import { HomeTop } from '../HomeTop/HomeTop'
import Dining from '../Dining/Dining'
import Travel from '../Travel/Travel'
import { Card } from '../Card/Card'
import { App } from '../App/App'
import { Concierege } from '../Concierege/Concierege'
import { Benefits } from '../Benefits/Benefits'
import { Footer } from '../Footer/Footer'




export const HomePage = () => {

  return (
    <div className='krejt'>

      <Header />
      <HomeTop />
      <Dining />
      <Travel />
      <Card />
      <App />
      <Concierege />
      <Benefits />
      <Footer />

    </div>
  )
}
