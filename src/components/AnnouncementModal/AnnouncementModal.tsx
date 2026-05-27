import { Chip, Dialog, DialogContent, Slide, Typography } from '@mui/material';
import type { TransitionProps } from '@mui/material/transitions';
import { forwardRef, useContext } from 'react';
import type { ReactElement } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { formatDate } from '../../utils';
import { WhatsNewContext } from '../WhatsNew/WhatsNewContext';
import styles from './AnnouncementModal.module.css';

const Transition = forwardRef<
  unknown,
  TransitionProps & { children: ReactElement }
>(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const AnnouncementModal = () => {
  const { activeAnnouncement, setActiveAnnouncement } =
    useContext(WhatsNewContext);

  const handleClose = () => {
    setActiveAnnouncement?.(undefined);
  };

  return (
    <Dialog
      id="rwn-modal"
      open={!!activeAnnouncement}
      slots={{ transition: Transition }}
      keepMounted
      onClose={handleClose}
    >
      {activeAnnouncement && (
        <>
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
              color="text.secondary"
              variant="caption"
            >
              {formatDate(activeAnnouncement.date)}
              {activeAnnouncement.version
                ? `, ${activeAnnouncement.version}`
                : ''}
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
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw]}
            >
              {activeAnnouncement.content}
            </ReactMarkdown>
          </DialogContent>
        </>
      )}
    </Dialog>
  );
};

export default AnnouncementModal;
