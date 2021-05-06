import React from 'react'

//assets
import Play_icon from '../assets/images/play-icon.png'
import Plus_icon from '../assets/images/plus-icon.png'

import '../assets/styles/components/CarouselItem.scss'

const CarouselItem = () => (
  <div className="carousel-item">
    <img src="https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" className="carousel-item__img"/>
    <div className="carousel-item__details">
      <div>
        <img src={Play_icon} alt="" className="carousel-item__details--img"/>
        <img src={Plus_icon} alt="" className="carousel-item__details--img"/>
      </div>
      <p className="carousel-item__details--title">Título descriptivo</p>
      <p className="carousel-item__details--subtitle">2019 - 16+ - 114 minutos</p>
    </div>
  </div>
)

export default CarouselItem