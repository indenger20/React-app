import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';


import "./Navigation.css";

export default class Navigation extends React.Component {
    render() {

        return (

            <div className="nav">
                <ul className="nav__list">
                    {
                        this.props.data.map(function (el, i) {
                            return (
                                <li className="nav__item" key={i}>
                                    <NavLink exact activeClassName="nav__link--active" className="nav__link" to={el.path}>{el.text}</NavLink>
                                </li>
                            )
                        })
                    }

                </ul>
                <NavLink exact activeClassName="nav__link--active" className="nav__link nav__link--settings" to="/react-app/settings">Setting</NavLink>
                <NavLink exact activeClassName="nav__link--active" className="nav__link nav__link--log" to="/react-app/login">Войти</NavLink>
            </div>
        )
    }

}