import App from './App.js';

import Home from './pages/Home';
import UserPage from './pages/UserPage';
import PostPage from './pages/PostPage';
import NotFound from './pages/NotFound';

export default [{
    component: App,
    routes: [{
        path: '/',
        component: Home,
        exact: true,
    },{
        path: '/users/:userid?',
        component: UserPage,
        exact: true,
    }, {
        path: '/Posts/',
        component: PostPage,
        exact: false,
    }, {
        component: NotFound, 
    }]
}];