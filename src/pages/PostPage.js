import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Item } from 'semantic-ui-react';

import Posts from '../actions/Posts';
import Loader from '../components/Loader';

class PostPage extends React.Component {
  componentDidMount() {
    this.props.getPosts();
  }

  renderPosts = () => {
    const { posts } = this.props;
    const postArray = Object.values(posts);

    const postList = (postArray.map((item) =>
      <StyledItem key={item.id}>
        <Item.Content>
          <Item.Header>{item.title}</Item.Header>
          <Item.Description>
            {item.body}
          </Item.Description>
        </Item.Content>
      </StyledItem>
    ));

    return (<Item.Group>{postList}</Item.Group>);
  }

  render() {
    const { posts } = this.props;
    const postList = (posts !== null) ? this.renderPosts() : <Loader />;

    return (
      <React.Fragment>
        {postList}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts.posts,
  };
};

export default connect(
  mapStateToProps,
  {
    getPosts: Posts.getAllPosts,
  }
)(PostPage);

const StyledItem = styled(Item)`
  border: 1px solid #d4d4d5 !important;
  padding: 10px !important;
  border-radius: 5px !important;
`;