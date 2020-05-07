import React from 'react';
import { connect } from 'react-redux';
import { Card } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import Users from '../actions/Users';
import Loader from '../components/Loader';

class UserPage extends React.Component {
  componentDidMount() {
    this.props.getUsers();
  }

  renderUsers = () => {
    const { users } = this.props;
    const userArray = Object.values(users);

    const userList = (userArray.map((item) =>
      <Card>
        <Card.Content>
          <Card.Header>{item.name}</Card.Header>
          <Card.Meta>{item.email}</Card.Meta>
          <Card.Description>
            Company: {item.company.name}
          </Card.Description>
        </Card.Content>
      </Card>
    ));

    return (<Card.Group>{userList}</Card.Group>);
  }

  render() {
    const { users } = this.props;
    const userList = (users !== null) ? this.renderUsers() : <Loader />;

    return (
      <React.Fragment>
        {userList}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users.users,
  };
};

export default connect(
  mapStateToProps,
  {
    getUsers: Users.getAllUsers,
  }
)(UserPage);