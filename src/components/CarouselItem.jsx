import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
//actions
import { setFavorite, deleteFavorite } from '../actions'

//assets
import Play_icon from '../assets/images/play-icon.png'
import Plus_icon from '../assets/images/plus-icon.png'
import removeIcon from '../assets/images/remove-icon.png'
//styles
import '../assets/styles/components/CarouselItem.scss'

const CarouselItem = (props) => {
  const { id, cover, title, year, contentRating, duration, description } = props
  const  handleSetFavorite = () => {
    props.setFavorite({
        id, cover, title, year, contentRating, duration, description,
    })
  }

  const handleDeleteFavorite = (itemId) => {
    props.deleteFavorite(itemId)
  }

  return (
    <div className="carousel-item">
      <img src={props.cover} alt="" className="carousel-item__img"/>
      <div className="carousel-item__details">
        <div>
          <Link to={`/player/${id}`}>
            <img 
              src={Play_icon} 
              alt="Play icon" 
              className="carousel-item__details--img"
            />
          </Link>

          {props.from === "trends" || props.from === "originals"?
          <img 
            src={Plus_icon} 
            alt="" 
            className="carousel-item__details--img"
            onClick={handleSetFavorite}
          />
          :
          <img 
            src={removeIcon} 
            alt="remove icon" 
            className="carousel-item__details--img"
            onClick={() => handleDeleteFavorite(id)}
          />}
        </div>
        <p className="carousel-item__details--title">{props.description}</p>
        <p className="carousel-item__details--subtitle">{props.year} - {props.contentRating} - {props.duration} minutos</p>
      </div>
    </div>
)}

const mapDispatchToProps = {
  setFavorite, 
  deleteFavorite,
}

export default connect(null, mapDispatchToProps)(CarouselItem)