import React, { Component } from 'react';

import "./Info.css";

function setBgStyle(all, val) {
    let percent = (val/all)*100;
    let bg = percent > 40 ? '#b1e19b' : '#ace2f8';
    return {
        'background': bg,
        'width': percent+'%'
    }
}

export default class Info extends React.Component {

    constructor(props) {
        super(props);
    }

    getAllVal() {
        let res = 0;
        this.props.data.forEach(function(el) {
            res = +el.val + res;
        });
        return res;
    }


    render() {
        let all = this.getAllVal();
        return (
            <div className="info">
                <table className="info__table">
                    <thead className="info__thead">
                        <tr className="info__row">
                            <th className="info__cell info__cell--head"></th>
                            <th className="info__cell info__cell--head">Услуг</th>
                        </tr>
                    </thead>
                    <tbody className="info__body">
                    <tr className="info__row" height="15"></tr>
                    {
                        this.props.data.map(function(el, i, arr) {
                            let classCell = 'info__cell';
                            if( i === 0 ) {
                                classCell += ' info__cell--first';
                            }else if(i === arr.length -1) {
                                classCell += ' info__cell--last';
                            };

                            return (
                                <tr className="info__row" key={i}>
                                    <td className={classCell}>
                                        <span className="info__title">
                                            {el.name} <span style={setBgStyle(all, el.val)} className="info__bg"></span>
                                        </span>
                                    </td>
                                    <td className={classCell}><b>{el.val}</b></td>
                                </tr>
                            )
                        })
                    }
                    <tr className="info__row" height="15"></tr>
                    </tbody>
                    <tfoot className="info__tfoot">
                        <tr className="info__row">
                            <td className="info__cell">Всего</td>
                            <td className="info__cell">{all}</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        )
    }
}

