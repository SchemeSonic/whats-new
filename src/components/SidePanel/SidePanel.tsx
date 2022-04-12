import React, {
  forwardRef,
  useContext,
  useEffect,
  useImperativeHandle,
  useState,
} from 'react';
import { Drawer } from '@material-ui/core';
import AnnouncementList from '../AnnouncementList/AnnouncementList';
import { WhatsNewContext } from '../WhatsNew/WhatsNewContext';
import WhatsNewService from '../../services/WhatsNewService';

interface SidePanelProps {
  open?: boolean;
  anchor?: 'left' | 'top' | 'right' | 'bottom';
}

const SidePanel = forwardRef((props: SidePanelProps, ref) => {
  const { open = false, anchor = 'right' } = props;
  const [panelOpen, setPanelOpen] = useState(open);
  const context = useContext(WhatsNewContext);

  useEffect(() => {
    if (context.activeAnnouncement) {
      setPanelOpen(false);
    }
  }, [context]);

  useImperativeHandle(ref, () => ({
    open: () => {
      setPanelOpen(true);
      WhatsNewService.setLastReadDate();
    },
    close: () => setPanelOpen(false),
    toggle() {
      setPanelOpen(!panelOpen);
      WhatsNewService.setLastReadDate();
    },
  }));

  return (
    <Drawer
      anchor={anchor}
      open={panelOpen}
      onClose={() => setPanelOpen(false)}
    >
      <AnnouncementList setPanelOpen={setPanelOpen} />
    </Drawer>
  );
});

export default SidePanel;
