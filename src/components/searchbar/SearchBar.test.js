import React from 'react';
import { shallow } from 'enzyme';
import SearchBar from './SearchBar';

describe('SearchBar Component', () => {
    it('It should render without error', () => {
        const component = shallow(<SearchBar />);
    });
})