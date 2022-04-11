import React, { useContext } from 'react';
import { Button, Chip, Paper, Typography } from '@material-ui/core';
import { ChevronRightRounded } from '@material-ui/icons';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Announcement } from '../..';
import { WhatsNewContext } from '../WhatsNew/WhatsNewContext';
import { formatDate } from '../../utils';
import styles from './AnnouncementCard.module.css';

interface AnnouncementCardProps {
  announcement: Announcement;
}

const AnnouncementCard = ({ announcement }: AnnouncementCardProps) => {
  const { setActiveAnnouncement } = useContext(WhatsNewContext);

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
          <Button
            size="small"
            color="primary"
            variant="text"
            onClick={() => setActiveAnnouncement?.(announcement)}
          >
            Güncelleme Detaylarını Gör <ChevronRightRounded />
          </Button>
        )}
      </div>
    </Paper>
  );
};

export default AnnouncementCard;
