import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

//páginas 
import Home from '../pages/Home'
import Login from '../pages/Login'


const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/login" component={Login}/>
    </Switch>
  </BrowserRouter>

)

 export default App