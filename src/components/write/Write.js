import React, { Component } from 'react';

import "./Write.css";


function getTime() {
    var month=new Array(12);
    month[0]="Январь";
    month[1]="Февраль";
    month[2]="Март";
    month[3]="Апрель";
    month[4]="Май";
    month[5]="Июнь";
    month[6]="Июль";
    month[7]="Август";
    month[8]="Сентябрь";
    month[9]="Октябрь";
    month[10]="Ноябрь";
    month[11]="Декабрь";

    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth();
    var yyyy = today.getFullYear();

    if(dd<10) {
        dd = '0'+dd
    }


    return today = dd + ' ' + month[mm] + ' ' + yyyy;
}

export default class Write extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            value: '',
            error: false
        };
        this.nameUser = this.props.nameUser || 'Unknown';
    }

    handleClick(e) {
        e.preventDefault();
        let val = this.state.value.replace(/(?:\r\n|\r|\n)/g, '\n');
        if(val) {
            this.setState({
                error: false
            });
            let time = getTime();
            let obj = {
                'text': val,
                'name': this.nameUser,
                'time': time
            };
            this.props.addComment(obj);
            this.setState({
                value: ''
            });
        }else {
            this.setState({
                error: true
            });
        }
    }

    handleChange(e) {
        this.setState({
            value: e.target.value
        });
    }

    render() {
        let classArea = 'input input-textarea write__input';
        if(this.state.error) {
            classArea += ' error';
        }else {
            let arr = classArea.slice(' ');
            let newArr = [];
            for (let i = 0; i < arr.length; i++) {
                if(arr[i] !== 'error') {
                    newArr.push(arr[i]);
                }
            };
            classArea = newArr.join('');
        }

        return(
            <form className="write">
                <div className="write__row">
                    <textarea
                        onChange={this.handleChange}
                        className={classArea}
                        value={this.state.value}
                    >

                    </textarea>
                    <button onClick={this.handleClick} type="submit" className="btn write__btn">Написать консультанту</button>
                </div>
            </form>
        )
    }
}