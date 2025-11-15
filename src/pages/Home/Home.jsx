import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'

const Home = () => {
  return (
    <div className='home'>
        <Navbar />
        <div className='hero'>
          <img src={hero_banner} 
          alt='image of movie or show banner' 
          className='bannerImg'/>
          <div className='heroCaption'>
            <img src={hero_title} 
            alt='image of title of movie' 
            className='captionImg'/>
            <p>
              Shrek's world gets turned upside down 
              after he makes a deal with Rumpelstiltskin. 
              Can Donkey, Fiona and Puss in Boots help 
              him make things right?
            </p>
            <div className='heroBtns'>
              <button className='btn darkBtn'><img src={play_icon} alt='play icon' />Play</button>
              <button className='btn darkBtn'><img src={info_icon} alt='info icon' />More Info</button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Home