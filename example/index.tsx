import 'react-app-polyfill/ie11';
import * as React from 'react';
import { useRef } from 'react';
import * as ReactDOM from 'react-dom';
import { SidePanel } from '../.';
import { IconButton } from '@material-ui/core';
import { NotificationsActive } from '@material-ui/icons';

const App = () => {
  const sidePanelRef = useRef<any>();
  return (
    <div>
      <IconButton
        color="secondary"
        onClick={() => sidePanelRef.current?.toggle()}
      >
        <NotificationsActive />
      </IconButton>
      <SidePanel ref={sidePanelRef} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
