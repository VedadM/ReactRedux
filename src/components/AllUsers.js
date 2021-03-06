import React from 'react';
import { connect } from 'react-redux';
import { Card } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';  

import Users from '../actions/Users';
import Loader from '../components/Loader';

class UserPage extends React.Component {

  componentDidMount() {
    this.props.getUsers();
  }

  refreshredirectPage = (id) => {
    this.props.history.push(`/users/${id}`);
    window.location.reload(false);
  }

  renderUsers = () => {
    const { users } = this.props;
    const userArray = Object.values(users);

    const userList = (userArray.map((item) =>
      <Card key={ item.id }>
        <Card.Content>
          <Card.Header>
            <Link 
              to={`/users/${item.id}`}
              onClick={() => this.refreshredirectPage(item.id)}>
                {item.name}
            </Link>
          </Card.Header>
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

export default withRouter(connect(
  mapStateToProps,
  {
    getUsers: Users.getAllUsers,
  }
)(UserPage));