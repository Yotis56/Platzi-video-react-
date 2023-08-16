import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

//páginas
import Layout from '../components/Layout';
import Home from '../pages/Home';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import Register from '../pages/Register';
import Player from '../pages/Player';
import getInitialState from '../services';
import { setState } from '../actions';

const API = 'http://localhost:3000/initialState';

const App = ({ setState }) => {

  useEffect(async () => {
    const data = await getInitialState(API);
    setState(data);
  }, []);

  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/player/:id' component={Player} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

const mapDispatchToProps = {
  setState,
};
//para que las rutas funcionen, hay que añadir en el webapck.config.js el historyApiFallback = true en dev server.
export default connect(null, mapDispatchToProps)(App);
