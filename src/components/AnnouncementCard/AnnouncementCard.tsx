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

const formatDate = (d: Date): string => {
  const locale = navigator.language || 'en-US';
  let year = new Intl.DateTimeFormat(locale, { year: 'numeric' }).format(d);
  let month = new Intl.DateTimeFormat(locale, { month: 'long' }).format(d);
  let day = new Intl.DateTimeFormat(locale, { day: '2-digit' }).format(d);
  return `${day} ${month} ${year}`;
};

const AnnouncementCard = ({ announcement }: AnnouncementCardProps) => {
  return (
    <Paper elevation={4} className={styles.announcementCard}>
      <div className={styles.header}>
        <div className={styles.tags}>
          {announcement.tags.map((tag, index) => (
            <Chip
              key={index}
              size="small"
              style={{
                backgroundColor: tag.backgroundColor || 'inherit',
                color: tag.color || 'inherit',
              }}
              label={tag.text}
            />
          ))}
        </div>
        <Typography
          className={styles.date}
          color="textSecondary"
          variant="caption"
        >
          {formatDate(announcement.date)}
          {announcement.version ? `, ${announcement.version}` : ''}
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
        {announcement.content && (
          <Button size="small" color="primary" variant="text">
            Güncelleme Detaylarını Gör <ChevronRightRounded />
          </Button>
        )}
      </div>
    </Paper>
  );
};

export default AnnouncementCard;
