//librerías
import React from 'react'

//custom hooks
import useInitialState from '../hooks/useInitialState'

//componentes
import Header from '../components/Header'
import Search from '../components/Search'
import Main from '../components/Main'
import Footer from '../components/Footer'

//estilos
import '../assets/styles/App.scss'

function Home () {

  const API = 'http://localhost:3000/initialState'
  const initialState = useInitialState(API)

  return (
    <React.Fragment>
      <Header />
      <Search 
        title="¿Qué quieres ver hoy?"
        placeholder_text="Buscar..."
      />
      <Main data={initialState}/>
      <Footer />
    </React.Fragment>
  )
}

export default Home