import 'react-app-polyfill/ie11';
import * as React from 'react';
import { useRef } from 'react';
import * as ReactDOM from 'react-dom';
import { Button } from '@material-ui/core';
import { WhatsNew } from '../.';
import { announcements } from './announcements';

const App = () => {
  const WhatsNewRef = useRef<any>();

  return (
    <div>
      <Button
        color="primary"
        variant="outlined"
        onClick={() => WhatsNewRef.current?.togglePanel()}
      >
        Show Announcements
      </Button>
      <WhatsNew announcements={announcements} ref={WhatsNewRef} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
