import React from 'react';

import CarouselItem from './CarouselItem';

//styles
import '../assets/styles/components/Carousel.scss';

const Carousel = ({ from, videos }) => {
  return (
    <section className='carousel'>
      <div className='carousel__container'>
        {
          videos.map((video) => (
            <CarouselItem
              from={from}
              key={video.id}
              id={video.id}
              cover={video.cover}
              title={video.title}
              year={video.year}
              contentRating={video.contentRating}
              duration={video.duration}
              description={video.description}
            />
          ))
        }
      </div>
    </section>
  );
};

export default Carousel;
