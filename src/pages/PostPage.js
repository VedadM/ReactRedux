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
    this.props.getUsers();

    this.setState({
      page: this.props.match.params.userid
    })
  }

  checkUrlParameter = () => {
    const { page } = this.state;
    const { userIds } = this.props;

    if (userIds.includes(Number(page))) {
      return <SpecificUserPosts />
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