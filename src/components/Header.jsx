import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
//actions
import { logoutRequest } from '../actions';
//utils
import gravatar from '../utils/gravatar';
//assets
import LogoPlatziBw2 from '../assets/images/logo-platzi-video-BW2.png';
import userIcon from '../assets/images/user-icon.png';
//Estilos
import '../assets/styles/components/Header.scss';

function Header(props) {
  const { user } = props;
  const hasUser = Object.keys(user).length === 0;
  //función que maneja el logout
  const handleLogout = () => {
    props.logoutRequest({});
  };
  //hacemos la comprobación de en dónde estamos, para cambiar estilos
  const headerClass = (useLocation().pathname === '/register' || useLocation().pathname === '/login') ? 'header greenHeader' : 'header';

  return (
    <header className={headerClass}>
      <Link to='/'>
        <img src={LogoPlatziBw2} alt='platzi logo' className='header__img' />
      </Link>
      <div className='header__menu'>
        <div className='header__menu--profile'>
          <img alt='user icon' src={hasUser ? userIcon : gravatar(user.email)} />
          <p>Perfil</p>
        </div>
        <ul>
          { hasUser ? <li><Link to='/'>{user.name}</Link></li> : null }
          { hasUser ?
            <li><Link to='/login'>Iniciar sesión</Link></li> :
            (
              <li>
                <Link to='/' onClick={handleLogout}>
                  Cerrar Sesión
                </Link>
              </li>
            )}
        </ul>
      </div>
    </header>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = {
  logoutRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);

