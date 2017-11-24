import React, { Component } from 'react';

import "./Comments.css";



export default class Comments extends React.Component {

    constructor(props) {
        super(props);
        this.toggleComments = this.toggleComments.bind(this);

        this.state = {
            allComment: false
        };
    }

    toggleComments(e) {
        e.preventDefault();
        if(this.state.allComment) {
            this.setState({
                allComment: false
            })
        }else {
            this.setState({
                allComment: true
            })
        }
    }

    render() {
        let commentsArr = [];
        let arr = this.props.data;
        if(!this.state.allComment) {
            if( arr.length > 3 ) {
                commentsArr = arr.slice(-3);
            }else {
                commentsArr = arr;
            }
        }else {
            commentsArr = arr;
        }


        return(
            <div className="comments">
                <div className="comments-last">
                    <div className="comments-last__left">
                        <span className="comments-last__title">{this.state.allComment ? 'Все отзывы': 'Последние отзывы'}</span>
                        <a href="#" onClick={this.toggleComments} className="comments-last__all">
                            {this.state.allComment ? 'Последние отзывы': 'Все отзывы'}
                        </a>
                    </div>
                    <div className="comments-last__right">
                        <span className="comments-last__info ">
                            <span className="heart-ico comments-last__ico"></span>
                            <span className="comments-last__count">131</span>
                        </span>
                        <span className="comments-last__info">
                            <span className="comment-ico comments-last__ico"></span>
                            <span className="comments-last__count">{this.props.data.length}</span>
                        </span>
                    </div>
                </div>
                <div className="comments-all">
                    {
                        commentsArr.map(function(el, i, arr) {
                            return (
                                <div className="comments-all__item" key={i}>
                                    <div className="comments-all__top">
                                        <span className="comments-all__name">{el.name}</span>
                                        <span className="comments-all__time">{el.time}</span>
                                    </div>
                                    <div className="comments-all__main">
                                        <span className="comments-all__text">{el.text}</span>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}