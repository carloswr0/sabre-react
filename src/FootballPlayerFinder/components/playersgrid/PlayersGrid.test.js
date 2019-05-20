import React from 'react';
import ReactDOM from 'react-dom';
import PlayersGrid from './PlayersGrid';

describe('PlayersGrid Component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<PlayersGrid />, div);
        ReactDOM.unmountComponentAtNode(div);
      });
});