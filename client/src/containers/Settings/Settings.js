import React, { Component } from 'react';

import Input from '../../components/form/input';

import PropTypes from 'prop-types';

import './settings.css';

import { connect } from 'react-redux';
import { saveInfoUser } from '../../actions/actions';
import { Glyphicon } from 'react-bootstrap';


function mapStateToProps(state) {
  return {
    infoUser: state.user.infoUser,
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
      desc: this.props.infoUser.desc,
      status: this.props.infoUser.status,
      edit: false,
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }



  componentWillReceiveProps(nextProps) {

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
      desc: this.state.desc,
      status: this.state.status,
    }
    this.setState({
      edit: false,
    })
    this.props.saveInfo(data);
  }


  render() {
    const { name, desc, status } = this.state;
    return (
      <div className="settings">
        <form className="settings__form">
          <div className="settings__row">
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
                <span className="settings__save" onClick={this.handleSave}><Glyphicon glyph="ok" /></span>
              </div> :
              null}
          </div>
          <div className="settings__row">
            {this.state.edit !== 'desc' ?
              <label>
                {desc ? desc : 'Some desc'}
                <span onClick={() => this.setState({ edit: 'desc' })} className="settings__edit"><Glyphicon glyph="refresh" /></span>
              </label> :
              null
            }
            {this.state.edit && this.state.edit === 'desc' ?
              <div>
                <Input
                  value={this.state.desc}
                  name="desc"
                  type="text"
                  className="input settings__input"
                  handleChange={this.handleChange}
                  placeholder="desc"
                  errors={null}
                />
                <span className="settings__save" onClick={this.handleSave}><Glyphicon glyph="ok" /></span>
              </div> :
              null}
          </div>
          <div className="settings__row">
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
                <span className="settings__save" onClick={this.handleSave}><Glyphicon glyph="ok" /></span>
              </div> :
              null}

          </div>
          {/* <div className="settings__row">
            <button className="btn" onClick={this.handleSave}>Save</button>
          </div> */}
        </form>
      </div>
    )
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(
  Settings
);
