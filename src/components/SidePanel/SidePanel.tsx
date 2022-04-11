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
    open: () => setPanelOpen(true),
    close: () => setPanelOpen(false),
    toggle() {
      console.log('toggle');
      setPanelOpen(!panelOpen);
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
