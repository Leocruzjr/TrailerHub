import React from 'react'
import './Footer.css'
import youtube_icon from '../../assets/youtube_icon.png'
import twitter_icon from '../../assets/twitter_icon.png'
import instagram_icon from '../../assets/instagram_icon.png'
import facebook_icon from '../../assets/facebook_icon.png'




const Footer = () => {
  return (
    <div className='footer'>
      <h2>TrailerHUB</h2>
      <div className="footerLeft">
        <h3>About</h3>
        <p>Thank you for visiting TrailerHUB. 
          This was created as a personal project with
           React JS & Firebase + TMDB API. </p>
      </div>
      <div className="footerRight">
        <h3>Resources</h3>
        <ul>
          <li>
            <a target="_blank" 
            rel="noopener noreferrer" 
            href="https://github.com/Leocruzjr/netflix-clone">
            GitHub Repository
            </a>
          </li>
          <li><a target="_blank" 
          rel="noopener noreferrer" 
          href="https://developer.themoviedb.org/reference/getting-started">
            TMDB API
            </a>
          </li>

        </ul>
      </div>
    </div>
  )
}

export default Footer