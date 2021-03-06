import React, { useContext } from 'react';
import { IconButton, Typography } from '@material-ui/core';
import AnnouncementCard from '../AnnouncementCard/AnnouncementCard';
import { WhatsNewContext } from '../WhatsNew/WhatsNewContext';
import styles from './AnnouncementList.module.css';

interface AnnouncementListProps {
  setPanelOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const AnnouncementList = ({ setPanelOpen }: AnnouncementListProps) => {
  const { announcements, translation } = useContext(WhatsNewContext);

  return (
    <div id="rwn-list" className={styles.container}>
      <div id="rwn-list-header" className={styles.header}>
        <Typography
          id="rwn-list-header-title"
          className={styles.title}
          variant="h6"
        >
          {translation['sidepanel.title']}
        </Typography>
        <IconButton
          id="rwn-list-header-btn"
          color="inherit"
          onClick={() => setPanelOpen(false)}
        >
          ✕
        </IconButton>
      </div>
      <div id="rwn-list-body" className={styles.body}>
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
