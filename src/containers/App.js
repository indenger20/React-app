import React, { Component } from 'react';
import {connect} from 'react-redux';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import { PropsRoute, PublicRoute, PrivateRoute } from 'react-router-with-props';

import Main from './main/main';
import Navigation from '../components/navigation/Navigation';

import  setCommentAction from '../actions/actionComment';

const history = createBrowserHistory();


function mapStateToProps(state) {
    return {
        infoUser: state.userInfo.infoUser,
        InfoData: state.userInfo.InfoData,
        navList: state.otherInfo.nav,
        CommentData: state.userInfo.CommentData
    }
};

function mapDispatchToProps(dispath) {
    return {
        setCommentFn: (data)=> {
            dispath(setCommentAction(data))
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
                        exact path="/" component={Main}
                    />
                </div>
            </BrowserRouter>
        )
    }
};

export default connect (mapStateToProps, mapDispatchToProps) (
    App
);