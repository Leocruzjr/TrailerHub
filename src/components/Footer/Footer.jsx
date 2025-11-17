import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footerLeft">
        <h2>TrailerHUB</h2>
        <p>Thank you for visiting. 
          This was created as a personal project on VSCode with
           React JS & Firebase + TMDB API. </p>
      </div>
      <div className="footerRight">
        <div className="content">
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
          <li><a target="_blank" 
          rel="noopener noreferrer" 
          href="https://www.netflix.com/">
            Design Inspo: netflix.com
            </a>
          </li>
        </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer