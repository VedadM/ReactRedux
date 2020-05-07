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

// import React from 'react';
// import { connect } from 'react-redux';
// import { Card } from 'semantic-ui-react'

// import Users from '../actions/Users';
// import Loader from '../components/Loader';

// class UserPage extends React.Component {
//   componentDidMount() {
//     this.props.getUsers();
//   }

//   renderUsers = () => {
//     const { users } = this.props;
//     const userArray = Object.values(users);

//     const userList = (userArray.map((item) =>
//       <Card key={item.id}>
//         <Card.Content>
//           <Card.Header>{item.name}</Card.Header>
//           <Card.Meta>{item.email}</Card.Meta>
//           <Card.Description>
//             Company: {item.company.name}
//           </Card.Description>
//         </Card.Content>
//       </Card>
//     ));

//     return (<Card.Group>{userList}</Card.Group>);
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
//     const { users } = this.props;
//     const userList = (users != null) ? this.renderUsers() : <Loader />;

//     return (
//       <React.Fragment>
//         {userList}
//       </React.Fragment>
//     );
//   }
// }

// const mapStateToProps = state => {
//   return { users: state.users.users };
// };

// export default connect(
//   mapStateToProps,
//   {
//     getUsers: Users.getAllUsers
//   }
// )(UserPage);