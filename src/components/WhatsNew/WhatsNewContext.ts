import { createContext, Dispatch, SetStateAction } from 'react';
import { Announcement } from '../..';
import translation from '../../translation';

interface WhatsNewContextProps {
  activeAnnouncement?: Announcement;
  setActiveAnnouncement?: Dispatch<SetStateAction<Announcement | undefined>>;
  announcements: Announcement[];
  translation: Record<string, string>;
}

export const WhatsNewContext = createContext<WhatsNewContextProps>({
  announcements: [],
  translation,
});
