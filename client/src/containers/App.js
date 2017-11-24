import React, { Component } from 'react';
import {connect} from 'react-redux';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import { PropsRoute, PublicRoute, PrivateRoute } from 'react-router-with-props';

import Main from './main/main';
import About from './about/about';
import LoginPage from './login/loginPage';
import Navigation from '../components/navigation/Navigation';

import  setCommentAction from '../actions/actionComment';
import  actionLogin from '../actions/actionLogin';

const history = createBrowserHistory();

const MYPATH = 'react-app';

function mapStateToProps(state) {
    return {
        infoUser: state.userInfo.infoUser,
        InfoData: state.userInfo.InfoData,
        navList: state.otherInfo.nav,
        CommentData: state.userInfo.CommentData,
        auth: state.otherInfo.auth
    }
};

function mapDispatchToProps(dispath) {
    return {
        setCommentFn: (data)=> {
            dispath(setCommentAction(data))
        },
        authLogin: (data)=> {
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
                        InfoData={this.props.InfoData}
                        CommentData={this.props.CommentData}
                        setCommentFn={this.props.setCommentFn}
                        infoUser={this.props.infoUser}
                        exact path="/react-app/" component={Main}
                    />
                    <PropsRoute path="/react-app/about" component={About}/>
                    <PropsRoute
                        auth={this.props.auth}
                        login={this.props.authLogin}
                        router={history}
                        path="/react-app/login" component={LoginPage}/>
                </div>
            </BrowserRouter>
        )
    }
};

export default connect (mapStateToProps, mapDispatchToProps) (
    App
);