import React, { Component } from 'react';
import validateInput from '../../server/shared/validation/login';
import Input from '../../components/form/input';

import PropTypes from 'prop-types';
import { actionLogin, actionRegistration } from '../../actions/actions';
import './loginPage.css';
import { Tabs, Tab } from 'react-bootstrap';

import { connect } from 'react-redux';


function mapStateToProps(state) {
  return {
    auth: state.otherInfo.auth
  }
};

function mapDispatchToProps(dispath) {
  return {
    authLogin: (data) => {
      dispath(actionLogin(data))
    },
    registration: (data) => {
      dispath(actionRegistration(data))
    }
  }
};

class LoginPage extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      identifier: '',
      password: '',
      errors: {},
      isLoading: false
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

  }

  isValid() {
    const { errors, isValid } = validateInput(this.state);
    this.setState({
      errors
    });
    return isValid;
  }

  handleSubmit(e) {
    if (this.isValid()) {
      console.log(e.target.name)
      switch (e.target.name) {
        case 'login':
          this.setState({
            errors: {},
            isLoading: true
          });
          this.props.authLogin(this.state);
          break;
        case 'registration':
          this.setState({
            errors: {},
            isLoading: true
          });
          this.props.registration(this.state);
          break;
        default:
          console.log('!!!');
      }
    }
    e.preventDefault();
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth !== this.state.auth) {
      nextProps.auth.then(
        (response) => {
          this.context.router.history.push('/');
        },
        (err) => {
          try {

            this.setState({
              errors: err.data.errors,
              isLoading: false
            })
          } catch (e) {
            console.warn(err);
          }
        }
      )
    }

  }

  renderLogin() {
    const { errors, identifier, password, isLoading } = this.state;
    return (
      <div>
        <h3>Login</h3>
        <form action="#" className="login-form" onSubmit={this.handleSubmit} name="login">
          <div className="login-form__row">
            <Input
              classParent="default-input"
              value={identifier}
              name="identifier"
              type="text"
              className="input login-form__input"
              handleChange={this.handleChange}
              placeholder="Yaroslav"
              errors={errors.identifier}
            />
          </div>
          <div className="login-form__row">
            <Input
              value={password}
              name="password"
              type="password"
              className="input login-form__input"
              handleChange={this.handleChange}
              placeholder="123"
              errors={errors.password}
            />
          </div>
          <div className="login-form__row">
            <button type="submit" className="login-form__btn btn" >Submit</button>
          </div>
        </form>
      </div>
    )
  }

  renderRegistration() {
    const { errors, identifier, password, isLoading } = this.state;
    return (
      <div>
        <h3>Registration</h3>
        <form action="#" className="login-form" onSubmit={this.handleSubmit} name="registration">
          <div className="login-form__row">
            <Input
              classParent="default-input"
              value={identifier}
              name="identifier"
              type="text"
              className="input login-form__input"
              handleChange={this.handleChange}
              placeholder="Yaroslav"
              errors={errors.identifier}
            />
          </div>
          <div className="login-form__row">
            <Input
              value={password}
              name="password"
              type="password"
              className="input login-form__input"
              handleChange={this.handleChange}
              placeholder="123"
              errors={errors.password}
            />
          </div>
          <div className="login-form__row">
            <button type="submit" className="login-form__btn btn" >Submit</button>
          </div>
        </form>
      </div>
    )
  }

  render() {

    return (
      <div className="login">
        <h1>Authorization page</h1>
        <Tabs defaultActiveKey={2} id="uncontrolled-tab-example">
          <Tab eventKey={1} title="Login">
            {this.renderLogin()}
          </Tab>
          <Tab eventKey={2} title="Registration">
            {this.renderRegistration()}
          </Tab>
        </Tabs>
      </div>
    )
  }
}

LoginPage.contextTypes = {
  router: PropTypes.object.isRequired
}


export default connect(mapStateToProps, mapDispatchToProps)(
  LoginPage
);