import React from 'react'
import logo_platzi_bw2 from '../assets/logo-platzi-video-BW2.png'
import user_icon from '../assets/user-icon.png'

function Header () {
  return (
    <header className="header">
      <img src={logo_platzi_bw2} alt="platzi logo" className="header__img"/>
      <div className="header__menu">
        <div className="header__menu--profile">
          <img src={user_icon} alt="user icon"/>
          <p>Perfil</p>
        </div>
        <ul>
          <li><a href="/">Cuenta</a></li>
          <li><a href="/">Cerrar sesión</a></li>
        </ul>
      </div>
    </header>  
  )
}

export default Header
