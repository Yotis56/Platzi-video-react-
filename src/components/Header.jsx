import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
//utils
import gravatar from '../utils/gravatar'
//assets
import logo_platzi_bw2 from '../assets/images/logo-platzi-video-BW2.png'
import user_icon from '../assets/images/user-icon.png'

//Estilos
import '../assets/styles/components/Header.scss'

function Header (props) {
  const { user } = props
  
  return (
    <header className="header">
      <Link to="/">
        <img src={logo_platzi_bw2} alt="platzi logo" className="header__img"/>
      </Link>
      <div className="header__menu">
        <div className="header__menu--profile">
          <img 
            alt="user icon" 
            src={ 
              Object.keys(user).length === 0 ? 
              <img src={user_icon} /> :
              <img src={gravatar(user.email)} alt="user icon" /> 
            } 
          />
          <p>Perfil</p>
        </div>
        <ul>
          <li><Link to="#">Cuenta</Link></li>
          <li><Link to="/login">Iniciar sesión</Link></li>
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

export default connect(mapStateToProps, null)(Header)
