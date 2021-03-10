import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { Computers } from './components/Computers';
import { ConfigureComponents } from './components/ConfigureComponents';
import { Basket } from './components/Basket';

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
            <Route path='/computers' component={Computers} />
            <Route path='/basket' component={Basket} />
            <Route path='/configureComponents' component={ConfigureComponents} />
      </Layout>
    );
  }
}
