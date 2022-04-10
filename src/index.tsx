import WhatsNew from './components/WhatsNew/WhatsNew';
import SidePanel from './components/SidePanel/SidePanel';
import AnnouncementCard from './components/AnnouncementCard/AnnouncementCard';

interface Announcement {
    title: string;
    overview: string;
    content: string;
    date: string;
    version: string;
    tags: string[];
}

export { WhatsNew, SidePanel, AnnouncementCard, Announcement };
