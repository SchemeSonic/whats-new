import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import { Announcement } from '../..';
import SidePanel from '../SidePanel/SidePanel';
import { WhatsNewContext } from './WhatsNewContext';

interface WhatsNewProps {
  announcements: Announcement[];
}

const WhatsNew = forwardRef(({ announcements }: WhatsNewProps, ref) => {
  const sidePanelRef = useRef<any>();

  useImperativeHandle(ref, () => ({
    openPanel: () => sidePanelRef.current?.open(),
    closePanel: () => sidePanelRef.current?.close(),
    togglePanel: () => sidePanelRef.current?.toggle(),
  }));

  return (
    <WhatsNewContext.Provider
      value={{
        announcements,
      }}
    >
      <React.Fragment>
        <SidePanel ref={sidePanelRef} />
      </React.Fragment>
    </WhatsNewContext.Provider>
  );
});

export default WhatsNew;
