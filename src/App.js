import React from 'react';
import { renderRoutes } from 'react-router-config';
import { Link } from 'react-router-dom';

function App(props) {
  return (
    <div>
      <br /><Link to="/users">Users</Link>
      <br /><Link to="/posts">Posts</Link>
      { renderRoutes(props.route.routes) }
    </div>
  );
}

export default App;
