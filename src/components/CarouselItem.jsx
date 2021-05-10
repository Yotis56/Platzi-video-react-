import React from 'react'

//assets
import Play_icon from '../assets/images/play-icon.png'
import Plus_icon from '../assets/images/plus-icon.png'

import '../assets/styles/components/CarouselItem.scss'

const CarouselItem = (props) => (
  <div className="carousel-item">
    <img src={props.cover} alt="" className="carousel-item__img"/>
    <div className="carousel-item__details">
      <div>
        <img src={Play_icon} alt="" className="carousel-item__details--img"/>
        <img src={Plus_icon} alt="" className="carousel-item__details--img"/>
      </div>
      <p className="carousel-item__details--title">{props.description}</p>
      <p className="carousel-item__details--subtitle">{props.year} - {props.contentRating} - {props.duration} minutos</p>
    </div>
  </div>
)

export default CarouselItem