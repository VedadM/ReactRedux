import React from 'react';
import { connect } from 'react-redux';

import Users from '../actions/Users';

import AllPosts from '../components/AllPosts';
import SpecificUserPosts from '../components/SpecificUserPosts';

class PostPage extends React.Component {
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

    return <AllPosts /> 
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
)(PostPage);