import WhatsNew from './components/WhatsNew/WhatsNew';
import WhatsNewService from './services/WhatsNewService';
import SidePanel from './components/SidePanel/SidePanel';
import AnnouncementCard from './components/AnnouncementCard/AnnouncementCard';
import {
  parseAnnouncement,
  parseAnnouncements,
} from './utils/parseAnnouncement';

interface Tag {
  text: string;
  color?: string;
  backgroundColor?: string;
}
interface Announcement {
  title: string;
  overview: string;
  content: string;
  date: Date;
  version?: string;
  tags: Tag[];
}

export {
  WhatsNew,
  WhatsNewService,
  SidePanel,
  AnnouncementCard,
  parseAnnouncement,
  parseAnnouncements,
  Announcement,
};
