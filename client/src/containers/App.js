import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import { PropsRoute, PublicRoute, PrivateRoute } from 'react-router-with-props';

import Main from './Main/Main';
import About from './About/About';
import LoginPage from './Login/LoginPage';
import Settings from './Settings/Settings';
import Navigation from '../components/navigation/Navigation';



import { actionLogin } from '../actions/actions';

const history = createBrowserHistory();


function mapStateToProps(state) {
    return {
        navList: state.otherInfo.nav,
        auth: state.otherInfo.auth
    }
};

function mapDispatchToProps(dispath) {
    return {
        authLogin: (data) => {
            dispath(actionLogin(data))
        }
    }
};




class App extends React.Component {
    render() {
        return (
            <BrowserRouter history={history}>
                <div className="container">
                    <Navigation data={this.props.navList} />

                    <PropsRoute
                        exact path="/" component={Main}
                    />
                    <PropsRoute path="/about" component={About} />
                    <PropsRoute path="/settings" component={Settings} />
                    <PropsRoute
                        auth={this.props.auth}
                        login={this.props.authLogin}
                        router={history}
                        path="/login" component={LoginPage} />
                </div>
            </BrowserRouter>
        )
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(
    App
);