import React, { Component } from 'react';
import { connect } from 'react-redux';

import User from '../../components/user/User';
import Info from '../../components/info/Info';
import CommentsView from '../../components/comments/Comments';
import Write from '../../components/write/Write';

import { addCommentAction } from '../../actions/actions';


function mapStateToProps(state) {
    return {
        infoUser: state.userInfo.infoUser,
        InfoData: state.userInfo.InfoData,
        CommentData: state.userInfo.CommentData
    }
};

function mapDispatchToProps(dispath) {
    return {
        setCommentFn: (data) => {
            dispath(addCommentAction(data))
        }
    }
};

class Main extends React.Component {
    render() {
        return (

            <div className="main">
                <div className="main__wrap">
                    <User infoUser={this.props.infoUser} />
                    <Info data={this.props.InfoData} />
                    <CommentsView data={this.props.CommentData} />
                </div>
                <Write addComment={this.props.setCommentFn} />
            </div>
        )
    }
};

export default connect (mapStateToProps, mapDispatchToProps) (
    Main
);