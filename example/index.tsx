import 'react-app-polyfill/ie11';
import * as React from 'react';
import { useRef } from 'react';
import * as ReactDOM from 'react-dom';
import { WhatsNew } from '../.';
import { IconButton } from '@material-ui/core';
import { NotificationsActive } from '@material-ui/icons';
import { announcements } from './announcements';

const App = () => {
  const WhatsNewRef = useRef<any>();

  return (
    <div>
      <IconButton
        color="secondary"
        onClick={() => WhatsNewRef.current?.togglePanel()}
      >
        <NotificationsActive />
      </IconButton>
      <WhatsNew announcements={announcements} ref={WhatsNewRef} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
