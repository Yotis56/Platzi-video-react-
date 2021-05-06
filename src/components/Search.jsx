import React from 'react'

import '../assets/styles/components/Search.scss'

const Search = (props) => (
  <section className="main">
    <h2 className="main__title">{props.title}</h2>
    <input type="text" className="input" placeholder={props.placeholder_text}/>
  </section>
)   

export default Search