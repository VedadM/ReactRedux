import React from 'react';
import { connect } from 'react-redux';

import Users from '../actions/Users';

class UserPage extends React.Component {
  componentDidMount() {
    this.props.getUsers();
  }

  renderUsers = () => {
    const { users } = this.props;
    const userArray = Object.values(users);

    const userList = (userArray.map((item) =>
      <li key={item.id}>{item.name}</li>
    ));

    return userList;
  }

  render() {
    const { users } = this.props;
    const userList = (users != null) ? this.renderUsers() : '';

    return (
      <React.Fragment>
        <div>Users:</div>
        <div>{userList}</div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return { users: state.users.users };
};

export default connect(
  mapStateToProps,
  {
    getUsers: Users.getAllUsers
  }
)(UserPage);