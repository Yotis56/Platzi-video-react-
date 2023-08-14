//librerías
import React from 'react';
import { connect } from 'react-redux';
//custom hooks
// import useInitialState from '../hooks/useInitialState'

//componentes
import Search from '../components/Search';
import Main from '../components/Main';

//estilos
import '../assets/styles/App.scss';

// const API = 'http://localhost:3000/initialState'
// const initialState = useInitialState(API)

function Home({ myList, trends, originals }) {
  const list = {
    myList,
    trends,
    originals,
  };
  return (
    <>
      <Search
        title='¿Qué quieres ver hoy?'
        placeholder_text='Buscar...'
      />
      <Main data={list} />
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    myList: state.myList,
    trends: state.trends,
    originals: state.originals,
  };
};
export default connect(mapStateToProps)(Home);
