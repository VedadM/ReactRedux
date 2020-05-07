import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Item } from 'semantic-ui-react';

import Users from '../actions/Users';
import Posts from '../actions/Posts';

import Loader from '../components/Loader';

class SpecificUserPosts extends React.Component {
  state = {
    currentId: null
  }
  
  componentDidMount() {
    const { id } = this.props;

    this.props.getOneUser(Number(id));
    this.props.getUserPosts(Number(id));

    this.setState({
      currentId: id,
    })
  }

  getUserInfo = () => {
    const { selectedUser } = this.props;

    return (
      <UserInfo>
        <Name>
          {selectedUser.name}
        </Name>
        <UserName>
          User Name: {selectedUser.username}
        </UserName>
        <Email>
          {selectedUser.email}
        </Email>
        <div>{selectedUser.address.street}, {selectedUser.address.suite}, {selectedUser.address.city} {selectedUser.address.zipcode}</div>
      </UserInfo>
    );
  }

  setUserPosts = () => {
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
  };

  render() {
    const {
      selectedUser,
      posts
    } = this.props;

    let userInfo = (selectedUser) ? this.getUserInfo() : <Loader />;
    let userPosts = (posts) ? this.setUserPosts() : <Loader />

    return (
      <React.Fragment>
        <div>{ userInfo }</div>
        <div>{ userPosts}</div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    selectedUser: state.users.selectedUser,
    posts: state.posts.specificUserPosts,
  };
};

export default connect(  
  mapStateToProps,
  {
    getOneUser: Users.getOneUser,
    getUserPosts: Posts.getUserPosts
  }
  )(SpecificUserPosts);

const UserInfo = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

const Name = styled.div`
  font-size: 25px;
  font-weight: bold;
`;

const UserName = styled.div`
  margin: 10px 0 0 0;
`;

const Email = styled.div`
  color: blue;
  text-decoration: underline;
`;

const StyledItem = styled(Item)`
  border: 1px solid #d4d4d5 !important;
  padding: 10px !important;
  border-radius: 5px !important;
`;