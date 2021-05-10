import React from 'react'

//styles
import '../assets/styles/components/Categories.scss'

function Categories (props) {
  return (
    <div className="categories">
      <h3 className="categories__title">{props.text}</h3>
      {props.children}
    </div>
  )
}


export default Categories