import React from 'react'
import { Link } from 'react-router-dom'
//assets
import googleIcon from '../assets/images/google-icon.png'
import twitterIcon from '../assets/images/twitter-icon.png'

//styles
import '../assets/styles/pages/Login.scss'

const Login = () => {
  return (
    <React.Fragment>
      <section className="login">
        <div className="login-container">
          <h2 className="login-title">Inicia sesion</h2>
          <form action="" className="login-form">
            <input className="login-input" type="text" placeholder="Correo" />
            <input className="login-input" type="email" placeholder="Contraseña" />
            <button className="login-btn">Iniciar sesión</button>
            <div className="login-remember">
              <label htmlFor="checkbox1"><input type="checkbox" id="checkbox1" value="checkbox"/>Recuerdame</label>
              <a href="#">Olvidé mi contraseña</a>
            </div>
          </form>
          <div className="login-social">
            <div><img src={googleIcon} alt="Google" /> inicia sesión con Google</div>
            <div><img src={twitterIcon} alt="twitter" /> inicia sesión con twitter</div>
          </div>
          <p className="login-register">¿No tienes ninguna cuenta? <Link to="/register">Registrate</Link></p>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Login