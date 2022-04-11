import React from 'react';
import { Announcement } from '../..';
import translation from '../../translation';

interface WhatsNewContextProps {
  activeAnnouncement?: Announcement;
  setActiveAnnouncement?: React.Dispatch<
    React.SetStateAction<Announcement | undefined>
  >;
  announcements: Announcement[];
  translation: Record<string, string>;
}

export const WhatsNewContext = React.createContext<WhatsNewContextProps>({
  announcements: [],
  translation,
});
