import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App Component', () => {
    it('It should render without error', () => {
        const component = shallow(<App />);
    });
})