import React, { Component } from 'react';

import Input from '../../components/form/input';

import PropTypes from 'prop-types';

import './settings.css';

import { connect } from 'react-redux';
import { saveInfoUser } from '../../actions/actions';
import { Glyphicon } from 'react-bootstrap';


function mapStateToProps(state) {
  return {
    infoUser: state.user.data,
  }
};

function mapDispatchToProps(dispath) {
  return {
    saveInfo: (data) => {
      dispath(saveInfoUser(data))
    }
  }
};

class Settings extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      name: this.props.infoUser.name,
      description: this.props.infoUser.description,
      status: this.props.infoUser.status,
      edit: false,
      photo: this.props.infoUser.photo,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }



  componentWillReceiveProps(nextProps) {
    this.setState({
      name: nextProps.infoUser.name,
      description: nextProps.infoUser.description,
      status: nextProps.infoUser.status,
    })
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handleSave(e) {
    e.preventDefault();
    const data = {
      name: this.state.name,
      description: this.state.description,
      status: this.state.status,
    }
    this.setState({
      edit: false,
    })
    this.props.saveInfo(data);
  }


  render() {
    const { name, description, status, photo } = this.state;
    const defaultPhoto = require('../../assets/images/users/user-1.png');
    return (
      <div className="settings">
        <form className="settings__form">
          <div className="settings__row">
            <span className="settings__label">Your Name</span>
            {this.state.edit !== 'name' ?
              <label>
                {name ? name : 'Some Name'}
                <span onClick={() => this.setState({ edit: 'name' })} className="settings__edit"><Glyphicon glyph="refresh" /></span>
              </label> :
              null
            }
            {this.state.edit && this.state.edit === 'name' ?
              <div>
                <Input
                  value={this.state.name}
                  name="name"
                  type="text"
                  className="input settings__input"
                  handleChange={this.handleChange}
                  placeholder="name"
                  errors={null}
                />
                <span className="settings__save" onClick={() => this.setState({ edit: false })}><Glyphicon glyph="ok" /></span>
              </div> :
              null}
          </div>
          <div className="settings__row">
            <span className="settings__label">Your Description</span>
            {this.state.edit !== 'description' ?
              <label>
                {description ? description : 'Some desc'}
                <span onClick={() => this.setState({ edit: 'description' })} className="settings__edit"><Glyphicon glyph="refresh" /></span>
              </label> :
              null
            }
            {this.state.edit && this.state.edit === 'description' ?
              <div>
                <Input
                  value={this.state.description}
                  name="description"
                  type="text"
                  className="input settings__input"
                  handleChange={this.handleChange}
                  placeholder="description"
                  errors={null}
                />
                <span className="settings__save" onClick={() => this.setState({ edit: false })}><Glyphicon glyph="ok" /></span>
              </div> :
              null}
          </div>
          <div className="settings__row">
            <span className="settings__label">Your Status</span>
            {this.state.edit !== 'status' ?
              <label>
                {status ? status : 'Some status'}
                <span onClick={() => this.setState({ edit: 'status' })} className="settings__edit"><Glyphicon glyph="refresh" /></span>
              </label> :
              null
            }
            {this.state.edit && this.state.edit === 'status' ?
              <div>
                <Input
                  value={this.state.status}
                  name="status"
                  type="text"
                  className="input settings__input"
                  handleChange={this.handleChange}
                  placeholder="status"
                  errors={null}
                />
                <span className="settings__save" onClick={() => this.setState({ edit: false })}><Glyphicon glyph="ok" /></span>
              </div> :
              null}
          </div>
          <div className="settings__row">
            <img className="setting__avatar" src={photo && photo !== 'unknown' ? require(photo) : defaultPhoto} />
            <input type="file" />
          </div>
          <div className="settings__row">
            <button className="btn" onClick={this.handleSave}>Save</button>
          </div>
        </form>
      </div>
    )
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(
  Settings
);
