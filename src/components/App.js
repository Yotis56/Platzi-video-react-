//librerías
import React from 'react'
//componentes
import Header from './Header'
import Search from './Search'
import Main from './Main'
import Footer from './Footer'

//estilos
import '../assets/styles/App.scss'

function App () {
  return (
    <React.Fragment>
      <Header />
      <Search 
        title="¿Qué quieres ver hoy?"
        placeholder_text="Buscar..."
      />
      <Main />
      <Footer />
    </React.Fragment>
  )
}

export default App