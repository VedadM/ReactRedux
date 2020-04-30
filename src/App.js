import React from 'react';
import styled from 'styled-components';
import { renderRoutes } from 'react-router-config';
import { Link } from 'react-router-dom';

function App(props) {
  return (
    <Container>
      <NavBar>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/users">Users</StyledLink>
        <StyledLink to="/posts">Posts</StyledLink>
      </NavBar>
      { renderRoutes(props.route.routes) }
    </Container>
  );
}

export default App;

const Container = styled.div`
  padding: 10px;
`;

const StyledLink = styled(Link)`
    padding: 10px;
    border: 1px solid #d4d4d5;
    margin: 0 10px;
    border-radius: 5px;
`;

const NavBar = styled.div`
  display: flex;
  margin-bottom: 15px;
`;
