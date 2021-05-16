import React from 'react'

//components
import Categories from './Categories'
import Carousel from './Carousel'

//styles


const Main = ({data}) => (
  <React.Fragment>

    {data.mylist.length > 0 && 
      <Categories text="Mi lista">
        <Carousel videos={data.mylist} />
      </Categories>
    }

    <Categories text="Tendencias">
      <Carousel videos={data.trends} />
    </Categories>

    {data.originals.length > 0 && 
      <Categories text="Originales de Platzi">
        <Carousel videos={data.originals} />
      </Categories>
    }
  </React.Fragment>
)

export default Main