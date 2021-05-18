import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

//páginas 
import Layout from '../components/Layout'
import Home from '../pages/Home'
import Login from '../pages/Login'
import NotFound from '../pages/NotFound'
import Register from '../pages/Register'


const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/register" component={Register}/>
        <Route component={NotFound}/>
      </Switch>
    </Layout>
  </BrowserRouter>

)
//para que las rutas funcionen, hay que añadir en el webapck.config.js el historyApiFallback = true en dev server.
 export default App