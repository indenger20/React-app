import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { PrivateRoute, authHeader, getUser } from '../../services/user';
import { actionLogin, logOut } from '../../actions/actions';

import Main from '../Main/Main';
import About from '../About/About';
import LoginPage from '../Login/LoginPage';
import Settings from '../Settings/Settings';
import Navigation from '../../components/navigation/Navigation';

function mapDispatchToProps(dispath) {
  return {
    login: (data) => {
      dispath(actionLogin(data))
    },
    logOut: () => {
      dispath(logOut())
    }
  }
};


class App extends React.Component {

  componentDidMount() {
    const user = authHeader();
    user ? this.props.login(user) : null;
  }
  
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          {authHeader() ? <Navigation logOut={this.props.logOut} data={this.props.navList} /> : null}
          <PrivateRoute exact path="/" component={Main} />
          <PrivateRoute path="/About" component={About} />
          <PrivateRoute path="/Settings" component={Settings} />
          <Route path="/Login" component={LoginPage} />
        </div>
      </BrowserRouter>
    )
  }
};

export default connect(null, mapDispatchToProps)(
  App
);
