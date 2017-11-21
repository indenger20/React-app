import React, { Component } from 'react';
import {Link} from 'react-router-dom';

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
                                    <Link className="nav__link" to={el.path}>{el.text}</Link>
                                </li>
                            )
                        })
                    }

                </ul>
            </div>
        )
    }

}