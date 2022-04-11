import React, { useContext } from 'react';
import { Button, Chip, Paper, Typography } from '@material-ui/core';
import { ChevronRightRounded } from '@material-ui/icons';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
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
    <Paper id="rwn-card" elevation={4} className={styles.announcementCard}>
      <div id="rwn-card-header" className={styles.header}>
        <div id="rwn-card-header-tags" className={styles.tags}>
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
          id="rwn-card-header-date"
          className={styles.date}
          color="textSecondary"
          variant="caption"
        >
          {formatDate(announcement.date)}
          {announcement.version ? `, ${announcement.version}` : ''}
        </Typography>
        <Typography
          id="rwn-card-header-title"
          className={styles.title}
          color="primary"
          variant="h6"
        >
          {announcement.title}
        </Typography>
      </div>
      <div id="rwn-card-body" className={styles.body}>
        <ReactMarkdown
          children={announcement.overview}
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}
        />
      </div>
      <div id="rwn-card-footer" className={styles.footer}>
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
