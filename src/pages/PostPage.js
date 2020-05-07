// import React from 'react';
// import { connect } from 'react-redux';

// import Users from '../actions/Users';

// import AllPosts from '../components/AllPosts';
// import SpecificUserPosts from '../components/SpecificUserPosts';
// import NotFound from '../pages/NotFound';

// class PostPage extends React.Component {
//   state = {
//     getSpecificPosts: false,
//     page: null
//   };

//   componentDidMount() {
//     const { userid } = this.props.match.params;

//     this.props.getUsers();

//     this.setState({
//       page: userid
//     })
//   }

//   checkUrlParameter = () => {
//     const { page } = this.state;
//     const { userIds } = this.props;

//     if (userIds.includes(Number(page))) {
//       return <SpecificUserPosts id={page} />
//     }

//     if ((!page && !userIds.includes(Number(page))) || !userIds.includes(Number(page)) || userIds === undefined) {
//       return <AllPosts /> 
//     }

//     return <NotFound /> 
//   }

//   render() {
//     const postComponent = this.checkUrlParameter();

//     return (
//       <React.Fragment>
//         {postComponent}
//       </React.Fragment>
//     );
//   }
// }

// const mapStateToProps = state => {
//   return {
//     userIds: state.users.userIds,
//   };
// };

// export default connect(
//   mapStateToProps,
//   {
//     getUsers: Users.getAllUsers
//   }
// )(PostPage);

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
  border-radius: 5px !important;`