import React from 'react';
import { connect } from 'react-redux';

import Users from '../actions/Users';

import AllUsers from '../components/AllUsers';
import SpecificUserPosts from '../components/SpecificUserPosts';
import NotFound from '../pages/NotFound';

class UserPage extends React.Component {
  state = {
    getSpecificPosts: false,
    page: null
  };

  componentDidMount() {
    const { userid } = this.props.match.params;

    this.props.getUsers();

    this.setState({
      page: userid
    })
  }

  checkUrlParameter = () => {
    const { page } = this.state;
    const { userIds } = this.props;

    if (userIds.includes(Number(page))) {
      return <SpecificUserPosts id={page} />
    }

    if ((!page && !userIds.includes(Number(page))) || !userIds.includes(Number(page)) || userIds === undefined) {
      return <AllUsers /> 
    }

    return <NotFound /> 
  }

  render() {
    const postComponent = this.checkUrlParameter();

    return (
      <React.Fragment>
        {postComponent}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    userIds: state.users.userIds,
  };
};

export default connect(
  mapStateToProps,
  {
    getUsers: Users.getAllUsers
  }
)(UserPage);