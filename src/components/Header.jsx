import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { connect } from 'react-redux'
//actions
import { logoutRequest } from '../actions'
//utils
import gravatar from '../utils/gravatar'
//assets
import logo_platzi_bw2 from '../assets/images/logo-platzi-video-BW2.png'
import user_icon from '../assets/images/user-icon.png'
//Estilos
import '../assets/styles/components/Header.scss'

function Header (props) {
  const { user } = props
  const hasUser = Object.keys(user).length === 0
  //función que maneja el logout 
  const handleLogout = () => {
    props.logoutRequest({}) 
  }
  //hacemos la comprobación de en dónde estamos, para cambiar estilos
  const headerClass = (useLocation().pathname === '/register' || useLocation().pathname === '/login') ? 'header greenHeader' : 'header'

  return (
    <header className={headerClass}>
      <Link to="/">
        <img src={logo_platzi_bw2} alt="platzi logo" className="header__img"/>
      </Link>
      <div className="header__menu">
        <div className="header__menu--profile">
          <img alt="user icon" src={ hasUser?  user_icon : gravatar(user.email) } />
          <p>Perfil</p>
        </div>
        <ul>
          { hasUser? <li><Link to="#">{user.name}</Link></li> : null }
          { hasUser? 
            <li><Link to="/login">Iniciar sesión</Link></li> : 
            <li><a to="#" onClick={handleLogout}>Cerrar Sesión</a></li> 
          }
        </ul>
      </div>
    </header>  
  )
}

const mapStateToProps = state => {
  return {
    user: state.user,
  }
}
const mapDispatchToProps = {
  logoutRequest
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
