import React, { Component } from 'react';

import User from '../../components/user/User';
import Info from '../../components/info/Info';
import CommentsView from '../../components/comments/Comments';
import Write from '../../components/write/Write';


class Main extends React.Component {
    render() {
        return (

            <div className="main">
                <div className="main__wrap">
                    <User />
                    <Info data={this.props.InfoData} />
                    <CommentsView data={this.props.CommentData} />
                </div>
                <Write addComment={this.props.setCommentFn} />
            </div>

        )
    }
};

export default Main;