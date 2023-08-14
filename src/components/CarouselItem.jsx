import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
//actions
import { setFavorite, deleteFavorite } from '../actions';

//assets
import playIcon from '../assets/images/play-icon.png';
import plusIcon from '../assets/images/plus-icon.png';
import removeIcon from '../assets/images/remove-icon.png';
//styles
import '../assets/styles/components/CarouselItem.scss';

const CarouselItem = (props) => {
  const { id, cover, title, year, contentRating, duration, description, from, deleteFavorite } = props;
  const handleSetFavorite = () => {
    props.setFavorite({
      id, cover, title, year, contentRating, duration, description,
    });
  };

  const handleDeleteFavorite = (itemId) => {
    deleteFavorite(itemId);
  };

  return (
    <div className='carousel-item'>
      <img src={cover} alt='' className='carousel-item__img' />
      <div className='carousel-item__details'>
        <div>
          <Link to={`/player/${id}`}>
            <img
              src={playIcon}
              alt='Play icon'
              className='carousel-item__details--img'
            />
          </Link>

          {from === 'trends' || from === 'originals' ?
            (
              <img
                src={plusIcon}
                alt=''
                className='carousel-item__details--img'
                onClick={handleSetFavorite}
              />
            ) :
            (
              <img
                src={removeIcon}
                alt='remove icon'
                className='carousel-item__details--img'
                onClick={() => handleDeleteFavorite(id)}
              />
            )}
        </div>
        <p className='carousel-item__details--title'>{description}</p>
        <p className='carousel-item__details--subtitle'>
          {`${year} - ${contentRating} - ${duration} minutos`}
        </p>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  setFavorite,
  deleteFavorite,
};

export default connect(null, mapDispatchToProps)(CarouselItem);
