import React from 'react';
import '../assets/styles/components/Search.scss';

const Search = ({ title, placeholderText }) => (
  <section className='main'>
    <h2 className='main__title'>{title}</h2>
    <input type='text' className='input' placeholder={placeholderText} />
  </section>
);

export default Search;
