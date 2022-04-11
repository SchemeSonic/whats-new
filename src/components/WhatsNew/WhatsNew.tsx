import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import AnnouncementModal from '../AnnouncementModal/AnnouncementModal';
import SidePanel from '../SidePanel/SidePanel';
import { WhatsNewContext } from './WhatsNewContext';
import { Announcement } from '../..';

interface WhatsNewProps {
  announcements: Announcement[];
}

const WhatsNew = forwardRef(({ announcements }: WhatsNewProps, ref) => {
  const [activeAnnouncement, setActiveAnnouncement] = useState<Announcement>();
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
        activeAnnouncement,
        setActiveAnnouncement,
      }}
    >
      <React.Fragment>
        <SidePanel ref={sidePanelRef} />
        <AnnouncementModal />
      </React.Fragment>
    </WhatsNewContext.Provider>
  );
});

export default WhatsNew;
