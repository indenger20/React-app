import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import { PropsRoute, PublicRoute, PrivateRoute } from 'react-router-with-props';
import { userIsAdminRedir, userIsAuthenticatedRedir, userIsNotAuthenticatedRedir } from './utils/authUtils';
import { login } from '../../actions/actions';

import Main from '../Main/Main';
import About from '../About/About';
import LoginPage from '../Login/LoginPage';
import Settings from '../Settings/Settings';
import Navigation from '../../components/navigation/Navigation';


const history = createBrowserHistory();

function mapStateToProps(state) {
    return {
        navList: state.otherInfo.nav
    }
};

function mapDispatchToProps(dispath) {
    return {
        login: () => {
            login()
        }
    }
};


class App extends React.Component {
    componentDidMount() {
        this.props.login();
    }
    render() {
        return (
            <BrowserRouter history={history}>
                <div className="container">
                    <Switch>
                        <Navigation data={this.props.navList} />
                        <PropsRoute exact path="/" component={Main} />
                        <PropsRoute path="/about" component={About} />
                        <PropsRoute path="/settings" component={Settings} />
                        <Route path="/Login" component={userIsNotAuthenticatedRedir(LoginPage)} />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(
    App
);
