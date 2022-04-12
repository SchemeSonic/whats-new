import 'react-app-polyfill/ie11';
import * as React from 'react';
import { useRef } from 'react';
import * as ReactDOM from 'react-dom';
import { Badge, Button } from '@material-ui/core';
import { WhatsNew, WhatsNewService } from '../.';
import { announcements } from './announcements';

const App = () => {
  const WhatsNewRef = useRef<any>();
  const [unreadCount, setUnreadCount] = React.useState(
    WhatsNewService.getUnreadCount(announcements)
  );

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Badge badgeContent={unreadCount} color="secondary" overlap="rectangular">
        <Button
          color="primary"
          variant="outlined"
          onClick={() => {
            WhatsNewRef.current?.togglePanel();
            setUnreadCount(WhatsNewService.getUnreadCount(announcements));
          }}
        >
          Show Announcements
        </Button>
      </Badge>
      <Button
        color="secondary"
        onClick={() => {
          localStorage.removeItem('rwn-last-read');
          setUnreadCount(WhatsNewService.getUnreadCount(announcements));
        }}
      >
        Clear Storage
      </Button>
      <WhatsNew
        announcements={announcements}
        translation={{
          'sidepanel.title': "What's new in Magic: The Gathering?",
        }}
        ref={WhatsNewRef}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
