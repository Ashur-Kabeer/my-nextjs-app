import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Carousel from '../components/Carousel'

const HomePage = () => {
  return (
    <div className="bg-gray-400">
        <Header/>
        <Navbar/>
        <Banner/>
        <Carousel/>
        <div>
          <h4>Deals Of The Day</h4>
        </div>
          
      
    </div>
  )
}

export default HomePage
