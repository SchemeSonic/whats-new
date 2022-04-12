import { Announcement } from '..';

const STORAGE_KEY = 'rwn-last-read';
abstract class WhatsNewService {
  static getUnreadCount(announcements: Announcement[]): number {
    const lastReadDate = this.getLastReadDate();

    const count = lastReadDate
      ? announcements.filter(announcement => {
          return announcement.date > lastReadDate;
        }).length
      : announcements.length;

    return count;
  }

  static getLastReadDate(): Date | null {
    const date = localStorage.getItem(STORAGE_KEY);
    return date ? new Date(Number(date)) : null;
  }

  static setLastReadDate(): void {
    localStorage.setItem(STORAGE_KEY, Date.now().toString());
  }
}

export default WhatsNewService;
