import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { WhatsNew } from '../src';

describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<WhatsNew announcements={[]} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
