import { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import AnnouncementModal from '../AnnouncementModal/AnnouncementModal';
import SidePanel from '../SidePanel/SidePanel';
import { WhatsNewContext } from './WhatsNewContext';
import { Announcement } from '../..';
import defaultTranslation from '../../translation';

interface SidePanelHandle {
  open: () => void;
  close: () => void;
  toggle: () => void;
}

interface WhatsNewProps {
  announcements: Announcement[];
  translation?: Record<string, string>;
}

const WhatsNew = forwardRef(function WhatsNew(
  { announcements, translation }: WhatsNewProps,
  ref
) {
  const [activeAnnouncement, setActiveAnnouncement] = useState<
    Announcement | undefined
  >(undefined);
  const sidePanelRef = useRef<SidePanelHandle>(null);

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
      <>
        <SidePanel ref={sidePanelRef} />
        <AnnouncementModal />
      </>
    </WhatsNewContext.Provider>
  );
});

export default WhatsNew;
