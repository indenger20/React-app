import React, { Component } from 'react';

class Input extends React.Component {
    render() {
        let error = this.props.errors;
        let classNameInput = this.props.className;
        if(error) {
            classNameInput += ' error';
        }
        return(
            <div className={this.props.classParent}>
                <input
                    type={this.props.type}
                    name={this.props.name}
                    value={this.props.value}
                    className={classNameInput}
                    placeholder={this.props.placeholder}
                    onChange={this.props.handleChange}
                />
                {
                    (()=> {
                        if(error) {
                            return <span className="error-text">{error}</span>
                        }
                    })()
                }
            </div>
        )
    }
};

export default Input;