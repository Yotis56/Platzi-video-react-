import React from 'react'
import { Link } from 'react-router-dom'

//assets
import logo_platzi_bw2 from '../assets/images/logo-platzi-video-BW2.png'
import user_icon from '../assets/images/user-icon.png'

//Estilos
import '../assets/styles/components/Header.scss'

function Header () {
  return (
    <header className="header">
      <Link to="/">
        <img src={logo_platzi_bw2} alt="platzi logo" className="header__img"/>
      </Link>
      <div className="header__menu">
        <div className="header__menu--profile">
          <img src={user_icon} alt="user icon"/>
          <p>Perfil</p>
        </div>
        <ul>
          <li><Link to="/login">Cuenta</Link></li>
          <li><Link to="/register">Iniciar sesión</Link></li>
        </ul>
      </div>
        {/* {
          props.loginIcon === "true" &&  
        } */}
    </header>  
  )
}

export default Header
