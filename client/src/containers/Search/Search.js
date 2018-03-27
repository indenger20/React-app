import React, { Component } from 'react';
import { connect } from 'react-redux';
import Input from '../../components/form/input';
import './Search.css';

import { getUsers } from '../../actions/actions';

function mapStateToProps(state) {
  return {
    users: state.main.users,
  }
};

function mapDispatchToProps(dispath) {
  return {
    getUsers: (data) => {
      dispath(getUsers(data))
    }
  }
};


class Search extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      filterString: '',
    }
  }

  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    const users = this.props.users;
    return (
      <div>
        <h1>Search Page</h1>
        <div>
          <h3>Find users</h3>
          <Input
            classParent="default-input"
            value={this.state.filterString}
            name="filter"
            type="text"
            className="input"
            handleChange={(e) => this.setState({ filterString: e.target.value }, () => this.props.getUsers(this.state.filterString))}
            placeholder="filter"
          />
          <ul className="search-list">
            {
              users.map((u, i) => {
                return (
                  <li className="search-list__item" key={i}>
                    <span className="search-list__name">{u.name}</span>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    )
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(
  Search
);