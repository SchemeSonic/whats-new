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
import defaultTranslation from '../../translation';

interface WhatsNewProps {
  announcements: Announcement[];
  translation?: Record<string, string>;
}

const WhatsNew = forwardRef(
  ({ announcements, translation }: WhatsNewProps, ref) => {
    const [activeAnnouncement, setActiveAnnouncement] = useState<
      Announcement
    >();
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
          translation: { ...defaultTranslation, ...translation },
        }}
      >
        <React.Fragment>
          <SidePanel ref={sidePanelRef} />
          <AnnouncementModal />
        </React.Fragment>
      </WhatsNewContext.Provider>
    );
  }
);

export default WhatsNew;
