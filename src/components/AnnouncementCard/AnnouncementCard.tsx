import React from 'react';
import { Chip, Paper, Typography } from '@material-ui/core';
import styles from './AnnouncementCard.module.css';

const AnnouncementCard = () => {
  return (
    <Paper className={styles.announcementCard}>
      <div className={styles.header}>
        <Typography className={styles.date} color="primary" variant="subtitle2">
          12 Ekim 2022, v1.0.23
        </Typography>
        <div className={styles.tags}>
          <Chip
            size="small"
            color="primary"
            label={Math.round(Math.random() * 10) % 3 ? 'New' : 'Improvement'}
          />
        </div>
      </div>
      <div className={styles.body}>
        Following the recent release of timeseries of click count, LogRocket now
        supports timeseries of custom events.
      </div>
      <div className={styles.footer}></div>
    </Paper>
  );
};

export default AnnouncementCard;
