import React from 'react'
import './Navbar.css'
import search_icon from '../../assets/search_icon.svg'
import bell_icon from '../../assets/bell_icon.svg'
import profile_img from '../../assets/profile_img.png'
import arrowdown_icon from '../../assets/arrowdown_icon.svg'
import logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='navbarLeft'>
            <img src={logo} alt='picture of logo "TrailerHUB"' /> 
            <ul>
                <li>Home</li>
                <li>TV Shows</li>
                <li>Movies</li>
                <li>What's Popular</li>
                <li>My Watch List</li>
                <li>Browse</li>
            </ul>
        </div>
        <div className='navbarRight'>
            <img className='icons' src={search_icon} alt='Search or Magnifying glass Icon' />
            <p>Kids</p>
            <img className='icons' src={bell_icon} alt='Notification or Bell Icon' />
            <div className='navbarProfile'>
                <img className='profile' src={profile_img} alt='image of profile picture' />
                <img className='icons' src={arrowdown_icon} alt='Arrow down or expand Icon' />
                <div className='dropdown'>
                    <p>
                        Sign out of TrailerHUB
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar