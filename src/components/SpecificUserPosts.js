import React from 'react';
import { connect } from 'react-redux';
import { Card } from 'semantic-ui-react'

import Users from '../actions/Users';

import Loader from '../components/Loader';

class SpecificUserPosts extends React.Component {
  state = {
    currentId: null
  }
  
  componentDidMount() {
    const { id } = this.props;

    this.props.getOneUser(Number(id));

    this.setState({
      currentId: id,
    })
  }

  setUserInfo = () => {
    const { selectedUser } = this.props;

    return (
      <Card>
        <Card.Content>
          <Card.Header>{selectedUser.name}</Card.Header>
          <Card.Meta>
            <span>{selectedUser.username}</span>
          </Card.Meta>
          <Card.Description>
            {selectedUser.email}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>

        </Card.Content>
      </Card>
    );
  }

  render() {
    const { selectedUser } = this.props;

    let userInfo = (selectedUser) ? this.setUserInfo() : <Loader />

    return (
      <div>{ userInfo }</div>
    );
  }
}

const mapStateToProps = state => {
  return { selectedUser: state.users.selectedUser };
};

export default connect(  
  mapStateToProps,
  {
    getOneUser: Users.getOneUser
  }
  )(SpecificUserPosts);