import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './SearchBar';

describe('SearchBar Component', () => {
  it('It should render without error', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SearchBar />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})