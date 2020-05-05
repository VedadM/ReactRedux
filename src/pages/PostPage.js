import React from 'react';
import { connect } from 'react-redux';

import Users from '../actions/Users';

import AllPosts from '../components/AllPosts';
import SpecificUserPosts from '../components/SpecificUserPosts';

class PostPage extends React.Component {
  state = {
    getSpecificPosts: false
  };

  componentDidMount() {
    if (this.props.match.params.userid === undefined) {
      this.setState({
        getSpecificPosts: true
      })
    }
  }

  render() {
    const { getSpecificPosts } = this.state;
    const postComponent = (getSpecificPosts) ? <AllPosts /> : <SpecificUserPosts />;
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