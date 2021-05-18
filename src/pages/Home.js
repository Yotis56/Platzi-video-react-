//librerías
import React from 'react'

//custom hooks
import useInitialState from '../hooks/useInitialState'

//componentes
import Search from '../components/Search'
import Main from '../components/Main'

//estilos
import '../assets/styles/App.scss'

function Home () {

  const API = 'http://localhost:3000/initialState'
  const initialState = useInitialState(API)

  return (
    <React.Fragment>
      <Search 
        title="¿Qué quieres ver hoy?"
        placeholder_text="Buscar..."
      />
      <Main data={initialState}/>
    </React.Fragment>
  )
}

export default Home