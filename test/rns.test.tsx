import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Rns from '../src';

describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Rns title="Hello react-npm-starter(Rns)" />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
