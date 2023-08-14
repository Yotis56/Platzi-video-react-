import React from 'react';

//styles
import '../assets/styles/components/Categories.scss';

function Categories({ text, children }) {
  return (
    <div className='categories'>
      <h3 className='categories__title'>{text}</h3>
      {children}
    </div>
  );
}

export default Categories;
