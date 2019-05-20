import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main';
import { mount } from 'enzyme';

describe('Main Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Main />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  test('should call fetch when mounted', () => {
    let mockFetch = jest.fn()
    const wrapper = mount(<Main getAllPlayers={mockFetch}/>);
    expect(wrapper).toBeDefined();
    expect(mockFetch).toHaveBeenCalled();
    expect(mockFetch.mock.calls[0]).toEqual([])
  });
})