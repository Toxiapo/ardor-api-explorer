import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/Home/Home'
import RequestDetail from './pages/RequestDetail/RequestDetail'
import ListAll from './pages/ListAll/ListAll'
import NotFound from './pages/NotFound/NotFound'

import './index.scss';

const Routers = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/list" component={ListAll} />
        <Route exact path="/requestDetail/:request" component={RequestDetail} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

ReactDOM.render(<Routers />, document.getElementById('root'));