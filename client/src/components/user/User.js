import React, { Component } from 'react';
import './User.css';

import UserPhoto from '../../assets/images/users/user-1.png';

export default class User extends React.Component {

    render() {
        console.log(this.props)
        return(
            <div className="user">
                <div className="user__image">
                    <img className="user__img" src={UserPhoto} alt=""/>
                </div>
                <div className="user__about">
                    <span className="user__name">{this.props.infoUser.name}</span>
                    <span className="user__desc">{this.props.infoUser.desc}</span>
                    <span className="user__status">{this.props.infoUser.status}</span>
                </div>
            </div>
        )
    }
}

