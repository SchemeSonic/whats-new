import { render } from '@testing-library/react';
import { WhatsNew } from '../src';

describe('WhatsNew', () => {
  it('renders without crashing', () => {
    render(<WhatsNew announcements={[]} />);
  });
});
