//librerías
import React from 'react'

//custom hooks
import useInitialState from '../hooks/useInitialState'

//componentes
import Header from './Header'
import Search from './Search'
import Main from './Main'
import Footer from './Footer'

//estilos
import '../assets/styles/App.scss'

function App () {

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

export default App