import {
  Chip,
  Dialog,
  DialogContent,
  Slide,
  Typography,
} from '@material-ui/core';
import { TransitionProps } from '@material-ui/core/transitions/transition';
import React, { forwardRef, useContext, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { formatDate } from '../../utils';
import { WhatsNewContext } from '../WhatsNew/WhatsNewContext';
import styles from './AnnouncementModal.module.css';

const Transition = forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement<any, any> },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const AnnouncementModal = () => {
  const [modalOpen, setModalOpen] = React.useState(false);
  const context = useContext(WhatsNewContext);
  const activeAnnouncement = context.activeAnnouncement;

  useEffect(() => {
    if (activeAnnouncement) {
      setModalOpen(true);
    }
  }, [context]);

  const handleClose = () => {
    setModalOpen(false);
    context.setActiveAnnouncement?.(undefined);
  };

  if (!activeAnnouncement) return null;

  return (
    <Dialog
      id="rwn-modal"
      open={modalOpen}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
    >
      <div id="rwn-modal-header" className={styles.header}>
        <Typography
          id="rwn-modal-header-title"
          className={styles.title}
          color="primary"
          variant="h6"
        >
          {activeAnnouncement.title}
        </Typography>
        <Typography
          id="rwn-modal-header-date"
          className={styles.date}
          color="textSecondary"
          variant="caption"
        >
          {formatDate(activeAnnouncement.date)}
          {activeAnnouncement.version ? `, ${activeAnnouncement.version}` : ''}
        </Typography>
        <div id="rwn-modal-header-tags" className={styles.tags}>
          {activeAnnouncement.tags.map((tag, index) => (
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
      </div>
      <DialogContent id="rwn-modal-body" className={styles.body}>
        <ReactMarkdown
          children={activeAnnouncement.content}
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}
        />
      </DialogContent>
    </Dialog>
  );
};

export default AnnouncementModal;
