import React from 'react';
import { Button, Chip, Paper, Typography } from '@material-ui/core';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Announcement } from '../..';
import styles from './AnnouncementCard.module.css';
import { ChevronRightRounded } from '@material-ui/icons';

interface AnnouncementCardProps {
  announcement: Announcement;
}

const AnnouncementCard = ({ announcement }: AnnouncementCardProps) => {
  return (
    <Paper elevation={4} className={styles.announcementCard}>
      <div className={styles.header}>
        <div className={styles.tags}>
          {announcement.tags.map((tag, index) => (
            <Chip key={index} size="small" color="primary" label={tag} />
          ))}
        </div>
        <Typography
          className={styles.date}
          color="textSecondary"
          variant="caption"
        >
          {announcement.date}, {announcement.version}
        </Typography>
        <Typography className={styles.title} color="primary" variant="h6">
          {announcement.title}
        </Typography>
      </div>
      <div className={styles.body}>
        <ReactMarkdown
          children={announcement.overview}
          remarkPlugins={[remarkGfm]}
        />
      </div>
      <div className={styles.footer}>
        <Button size="small" color="primary" variant="text">
          Güncelleme Detaylarını Gör <ChevronRightRounded />
        </Button>
      </div>
    </Paper>
  );
};

export default AnnouncementCard;
