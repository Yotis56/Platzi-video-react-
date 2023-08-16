//librerías
import React from 'react';
import { connect } from 'react-redux';
//custom hooks
//componentes
import Search from '../components/Search';
import Main from '../components/Main';

//estilos
import '../assets/styles/App.scss';

function Home({ mylist, trends, originals }) {

  return (
    <>
      <Search
        title='¿Qué quieres ver hoy?'
        placeholderText='Buscar...'
      />
      <Main mylist={mylist} trends={trends} originals={originals} />
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    mylist: state.mylist,
    trends: state.trends,
    originals: state.originals,
  };
};

export default connect(mapStateToProps)(Home);
