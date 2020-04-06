import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Dashboard from './components/Dashboard.jsx';
import Cluster_Container from './containers/Cluster_Container';
import Home from './components/Home.jsx';
import Login from './components/Login.jsx';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='mainContainer' id='app'>
          <Dashboard />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/login' component={Login} />
            <Route path='/:id' children={<Cluster_Container />} />
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
