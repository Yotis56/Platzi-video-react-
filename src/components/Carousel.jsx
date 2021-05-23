import React from 'react';

import CarouselItem from './CarouselItem';

//styles
import '../assets/styles/components/Carousel.scss';

const Carousel = (props) => {
  const from = props.from
  return (
    <section className="carousel">
      <div className="carousel__container">
        {
          props.videos.map((video) => (
            <CarouselItem from={from} key={video.id} {...video} />
          ))
        }
      </div>
    </section>
)}

export default Carousel;
