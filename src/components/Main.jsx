import React from 'react';

//components
import Categories from './Categories';
import Carousel from './Carousel';

//styles

const Main = ({ mylist, trends, originals }) => (
  <>
    {mylist.length > 0 && (
      <Categories text='Mi lista'>
        <Carousel videos={mylist} from='myList' />
      </Categories>
    )}
    <Categories text='Tendencias'>
      <Carousel videos={trends} from='trends' />
    </Categories>
    {originals.length > 0 && (
      <Categories text='Originales de Platzi'>
        <Carousel videos={originals} from='originals' />
      </Categories>
    )}
  </>
);

export default Main;
