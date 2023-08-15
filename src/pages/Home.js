//librerías
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
//custom hooks
import getInitialState from '../services';
import { setState } from '../actions';
//componentes
import Search from '../components/Search';
import Main from '../components/Main';

//estilos
import '../assets/styles/App.scss';

const API = 'http://localhost:3000/initialState';

function Home({ mylist, trends, originals, setState }) {

  useEffect(async () => {
    const data = await getInitialState(API);
    setState(data);
  }, []);

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
const mapDispatchToProps = {
  setState,
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
