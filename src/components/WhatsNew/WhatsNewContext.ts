import React from 'react';
import { Announcement } from '../..';

interface WhatsNewContextProps {
  activeAnnouncement?: Announcement;
  announcements: Announcement[];
}

export const WhatsNewContext = React.createContext<WhatsNewContextProps>({
  activeAnnouncement: undefined,
  announcements: [],
});
