import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { PrivateRoute, CheckToAuth } from './utils/authUtils';
import { login } from '../../actions/actions';

import Main from '../Main/Main';
import About from '../About/About';
import LoginPage from '../Login/LoginPage';
import Settings from '../Settings/Settings';
import Navigation from '../../components/navigation/Navigation';

function mapDispatchToProps(dispath) {
  return {
    login: () => {
      // login()
    }
  }
};


class App extends React.Component {
  componentDidMount() {

  }
  render() {
    return (

      <BrowserRouter>
        <div className="container">
          <Switch>
            {CheckToAuth() ? <Navigation data={this.props.navList} /> : null}
            <PrivateRoute exact path="/" component={Main} />
            <PrivateRoute path="/About" component={About} />
            <PrivateRoute path="/Settings" component={Settings} />
            <Route path="/Login" component={LoginPage} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
};

export default connect(null, mapDispatchToProps)(
  App
);
