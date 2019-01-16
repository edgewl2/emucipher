import React from 'react';
import ReactDOM from 'react-dom';
import Vector from './Vector';

it('renders vector with position property', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Vector position={'top'} />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('renders vector with position and number properties', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Vector position={'bottom'} numbers={'2'} />, div);
    ReactDOM.unmountComponentAtNode(div);
});