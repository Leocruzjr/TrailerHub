import React, { useEffect, useRef, useState } from 'react'
import './TitleCards.css'
import {Link} from 'react-router-dom'

const TitleCards = ({title, category}) => {

  const [apiData, SetApiData] = useState([]);
  const cardsRef = useRef();
  
  {/*TMDB API REFERENCE*/}
  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNmJjYjQzMDkwNzhjMzdkNzllNTJkM2ZkZWNiMDI5YSIsIm5iZiI6MTc2MzU0MTY0Ni45NjMsInN1YiI6IjY5MWQ4MjhlOTQ5YjE4ZjAyNDJkMDJjOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4L25JZDFEJ3ocI1M0GZhMZ1zt2edOOXAS1WygvknKys'
  }
};

  const handleWheel = (event) => {
  event.preventDefault();
  cardsRef.current.scrollLeft += event.deltaY;
}


  useEffect(()=>{

    fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
  .then(res => res.json())
  .then(res => SetApiData(res.results))
  .catch(err => console.error(err));

    cardsRef.current.addEventListener('wheel', handleWheel);
  },[])

  return (
    <div className='titleCards'> 
      <h2>{title?title: "Popular Today"}</h2>
      <div className='cardList' ref={cardsRef}>
        {apiData.map((card, index)=>{
          return <Link to={`/player/${card.id}`} className='card' key={index}>
            <img src={`https://image.tmdb.org/t/p/w500` + card.backdrop_path} alt='' />
            <p>{card.original_title}</p>
          </Link>
          })}
      </div>
    </div>
  )
}

export default TitleCards