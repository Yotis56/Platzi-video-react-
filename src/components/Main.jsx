import React from 'react'

//components
import Categories from './Categories'
import Carousel from './Carousel'
import CarouselItem from './CarouselItem'

//styles


const Main = ({data}) => (
  <React.Fragment>

    {data.mylist.length > 0 && 
      <Categories text="Mi lista">
        <Carousel>
        {
          data.mylist.map( (video) => (
            <CarouselItem 
              key={video.id}
              {...video}
            />
          ) )
        }
        </Carousel>
      </Categories>
    }

    <Categories text="Tendencias">
      <Carousel>
        {
          data.trends.map( (video) => (
            <CarouselItem 
              key={video.id}
              {...video}
            />
          ) )
        }
      </Carousel>
    </Categories>

    <Categories text="Originales de Platzi Video">
      <Carousel>
        <CarouselItem />
      </Carousel>
    </Categories>
  </React.Fragment>
)

export default Main