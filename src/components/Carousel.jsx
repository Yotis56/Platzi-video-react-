import React from 'react'

//styles
import '../assets/styles/components/Carousel.scss'

const Carousel = (props) => (
  <section className="carousel">
    <div className="carousel__container">
      {props.children}
    </div>
  </section>
)

export default Carousel