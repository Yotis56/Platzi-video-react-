import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
//actions
import { loginRequest } from '../actions';
//assets
import googleIcon from '../assets/images/google-icon.png';
import twitterIcon from '../assets/images/twitter-icon.png';
//styles
import '../assets/styles/pages/Login.scss';

const Login = (props) => {
  //creo en el estado del componente la información del formulario, inicializandolo como campos vacíos.
  const [form, setValues] = useState({
    email: '',
  });
  //función que se encarga de recoger la info tipeada en los input. y guardarla en el estado del componente
  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };
  //función que se encarga de transmitir el submit.
  const handleSubmit = (event) => {
    event.preventDefault();
    props.loginRequest(form);
    props.history.push('/');
  };

  return (
    <>
      <section className='login'>
        <div className='login-container'>
          <h2 className='login-title'>Inicia sesion</h2>
          <form action='' className='login-form' onSubmit={handleSubmit}>
            <input
              name='email'
              className='login-input'
              type='email'
              placeholder='Correo electrónico'
              onChange={handleInput}
            />
            <input
              name='password'
              className='login-input'
              type='password'
              placeholder='Contraseña'
              onChange={handleInput}
            />
            <button type='submit' className='login-btn'>Iniciar sesión</button>
            <div className='login-remember'>
              <label htmlFor='checkbox1'>
                <input type='checkbox' id='checkbox1' value='checkbox' />
                Recuerdame
              </label>
              <Link to='/recuperarContraseña'>Olvidé mi contraseña</Link>
            </div>
          </form>
          <div className='login-social'>
            <div>
              <img src={googleIcon} alt='Google' />
              inicia sesión con Google
            </div>
            <div>
              <img src={twitterIcon} alt='twitter' />
              inicia sesión con twitter
            </div>
          </div>
          <p className='login-register'>
            ¿No tienes ninguna cuenta?
            <Link to='/register'>Registrate</Link>
          </p>
        </div>
      </section>
    </>
  );
};

const mapDispatchToProps = {
  loginRequest,
};

export default connect(null, mapDispatchToProps)(Login);
