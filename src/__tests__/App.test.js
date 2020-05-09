import React from 'react';
import ReactDOM from 'react-dom';

import App from '../App';

let container = "";

jest.mock('react-dom', () => ({
    render: jest.fn(),
}));

beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
});
  
afterEach(() => {
    document.body.removeChild(container);
    container = "";
});

it('renders without crashing', () => {
    ReactDOM.render(<App />, container);
});