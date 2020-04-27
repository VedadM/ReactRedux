import App from './App.js';
import PageOne from './pages/PageOne';
import PageTwo from './pages/PageTwo';

export default [{
    component: App,
    routes: [{
        path: '/page-1',
        component: PageOne,
    }, {
        path: '/page-2',
        component: PageTwo, 
    }]
}];