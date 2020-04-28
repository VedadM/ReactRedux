import React from 'react';
import { connect } from 'react-redux';

import Posts from '../actions/Posts';

class PostPage extends React.Component {
  componentDidMount() {
    this.props.getPosts();
  }

  renderPosts = () => {
    const { posts } = this.props;
    const postArray = Object.values(posts);

    const postList = (postArray.map((item) =>
      <li key={item.id}>{item.title}</li>
    ));

    return postList;
  }

  render() {
    const { posts } = this.props;
    const postList = (posts != null) ? this.renderPosts() : '';

    return (
      <React.Fragment>
        <div>Posts:</div>
        <div>{postList}</div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return { posts: state.posts.posts };
};

export default connect(
  mapStateToProps,
  {
    getPosts: Posts.getAllPosts
  }
)(PostPage);