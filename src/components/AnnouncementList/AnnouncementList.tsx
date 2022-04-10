import { IconButton, Typography } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import React from 'react';
import AnnouncementCard from '../AnnouncementCard/AnnouncementCard';
import styles from './AnnouncementList.module.css';

interface AnnouncementListProps {
  setPanelOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const AnnouncementList = ({ setPanelOpen }: AnnouncementListProps) => {
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
        {[1, 2, 3, 4].map(i => (
          <AnnouncementCard key={i} />
        ))}
      </div>
      <div className={styles.footer}>Version 1.0.23</div>
    </div>
  );
};

export default AnnouncementList;
