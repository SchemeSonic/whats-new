import React, { useContext } from 'react';
import { IconButton, Typography } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import AnnouncementCard from '../AnnouncementCard/AnnouncementCard';
import { WhatsNewContext } from '../WhatsNew/WhatsNewContext';
import styles from './AnnouncementList.module.css';

interface AnnouncementListProps {
  setPanelOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const AnnouncementList = ({ setPanelOpen }: AnnouncementListProps) => {
  const { announcements } = useContext(WhatsNewContext);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Typography className={styles.title} variant="h6">
          What's new in your app?
        </Typography>
        <IconButton color="inherit" onClick={() => setPanelOpen(false)}>
          <Close />
        </IconButton>
      </div>
      <div className={styles.body}>
        {announcements.map(announcement => (
          <AnnouncementCard
            announcement={announcement}
            key={announcement.date.toString()}
          />
        ))}
      </div>
    </div>
  );
};

export default AnnouncementList;
