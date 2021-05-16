import React from 'react';

import CarouselItem from './CarouselItem';

//styles
import '../assets/styles/components/Carousel.scss';

const Carousel = (props) => (
  <section className="carousel">
    <div className="carousel__container">
      {
        props.videos.map((video) => (
          <CarouselItem key={video.id} {...video} />
        ))
      }
    </div>
  </section>
)

export default Carousel;
