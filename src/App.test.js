import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Load} from './components/patterns/patterns'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App children={Load} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
