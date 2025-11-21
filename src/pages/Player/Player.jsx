import React, { useEffect, useState } from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { Navigate, useNavigate, useParams } from 'react-router-dom'

const Player = () => {

  const {id} = useParams();
  const navigate = useNavigate();

  const [apiData, setApiData] = useState({
    name: '',
    key: '',
    published_at: '',
    typeof: ''
  })

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNmJjYjQzMDkwNzhjMzdkNzllNTJkM2ZkZWNiMDI5YSIsIm5iZiI6MTc2MzU0MTY0Ni45NjMsInN1YiI6IjY5MWQ4MjhlOTQ5YjE4ZjAyNDJkMDJjOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4L25JZDFEJ3ocI1M0GZhMZ1zt2edOOXAS1WygvknKys'
  }
}

useEffect(()=>{
  fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
  .then(res => res.json())
  .then(res => setApiData(res.results[0]))
  .catch(err => console.error(err))
},[])


  return (
    <div className= 'player'>
      <img src={back_arrow_icon} alt= "icon of back arrow" onClick={()=>{navigate(-2)}}/>
      <iframe
      width= '90%' 
      height= '90%'
      src= {`https://www.youtube.com/embed/${apiData.key}`}
      title= 'Trailer'
      frameBorder= '0' allowFullScreen>
      </iframe>
      <div className="playerInfo">
        <p> {apiData.published_at.slice(0, 10)} </p>
        <p> {apiData.name} </p>
        <p> {apiData.typeof} </p>
      </div>
    </div>
  )
}

export default Player