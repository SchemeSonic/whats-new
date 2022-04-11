import React from 'react';
import { Announcement } from '../..';

interface WhatsNewContextProps {
  activeAnnouncement?: Announcement;
  setActiveAnnouncement?: React.Dispatch<
    React.SetStateAction<Announcement | undefined>
  >;
  announcements: Announcement[];
}

export const WhatsNewContext = React.createContext<WhatsNewContextProps>({
  announcements: [],
});
