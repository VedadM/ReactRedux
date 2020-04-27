import React from 'react';
import { renderRoutes } from 'react-router-config';
import { Link } from 'react-router-dom';

function App(props) {
  return (
    <div>
      { renderRoutes(props.route.routes) }
      <br /><Link to="/page-1">Page1</Link>
      <br /><Link to="/page-2">Page2</Link>
    </div>
  );
}

export default App;
