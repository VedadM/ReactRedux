import App from './App.js';
import UserPage from './pages/UserPage';
import PostPage from './pages/PostPage';

export default [{
    component: App,
    routes: [{
        path: '/users',
        component: UserPage,
    }, {
        path: '/posts',
        component: PostPage, 
    }]
}];