import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';


import "./Navigation.css";

export default class Navigation extends React.Component {
    render() {

        return (

            <div className="nav">
                <ul className="nav__list">
                    <li className="nav__item" key={1}>
                        <NavLink exact activeClassName="nav__link--active" className="nav__link" to="/">Main</NavLink>
                    </li>
                    <li className="nav__item" key={2}>
                        <NavLink exact activeClassName="nav__link--active" className="nav__link" to="/About">About</NavLink>
                    </li>
                </ul>
                <NavLink exact activeClassName="nav__link--active" className="nav__link nav__link--settings" to="/Settings">Setting</NavLink>
                <NavLink 
                    exact 
                    activeClassName="nav__link--active" 
                    className="nav__link nav__link--log" 
                    to="/" 
                    onClick={() => this.props.logOut()}
                >Выйти</NavLink>
            </div>
        )
    }

}