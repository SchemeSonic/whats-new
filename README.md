# What's New component for react

> Show new features

[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://GitHub.com/paraboly/react-apexcharts-dynamic-config/graphs/commit-activity)
[![NPM](https://img.shields.io/npm/v/@schemesonic/whats-new.svg)](https://www.npmjs.com/package/@schemesonic/whats-new) [![Netlify Status](https://api.netlify.com/api/v1/badges/ed06153b-5f15-4305-b897-22ed648b95ae/deploy-status)](https://app.netlify.com/sites/react-whats-new/deploys)
[![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)](https://github.com/Naereen/StrapDown.js/blob/master/LICENSE)

## Demo

| Announcements                                                                |                              Announcement Details                               |
| ---------------------------------------------------------------------------- | :-----------------------------------------------------------------------------: |
| <img src="https://raw.githubusercontent.com/SchemeSonic/whats-new/main/img/sidepanel.png" alt="Announcements" style="max-height: 500px"> | <img src="https://raw.githubusercontent.com/SchemeSonic/whats-new/main/img/modal.png" alt="Announcement Details" style="max-height: 500px"> |

> https://react-whats-new.netlify.app

---

## Install

```bash
npm install --save @schemesonic/whats-new
```

---

## Usage

```tsx
import React, { useRef } from 'react';
import { Badge, Button } from '@material-ui/core';
import { WhatsNew, WhatsNewService } from '@schemesonic/whats-new';

const WhatsNewExample = (): JSX.Element => {
  const WhatsNewRef = useRef<any>();
  const [unreadCount, setUnreadCount] = React.useState(
    WhatsNewService.getUnreadCount(announcements)
  );
  const announcements = [
    {
      title: "NEW ABILITY WORD: COVEN",
      date: new Date("2022-04-09"),
      version: 'v1.1.0',
      tags: [{
        text: 'New Feature',
        color: 'rgba(0, 0, 0, 0.87)',
        backgroundColor: '#99d066',
      }],
      overview: `### This is overview`,
      content: `### This is content`
    }
  ];

  return <div>
    <Badge badgeContent={unreadCount} color="secondary" overlap="rectangular">
      <Button
        color="primary"
        variant="outlined"
        onClick={() => {
          WhatsNewRef.current?.togglePanel();
          setUnreadCount(WhatsNewService.getUnreadCount(announcements));
        }}
      >
        Show Announcements
      </Button>
    </Badge>
    <WhatsNew
      announcements={announcements}
      translation={{
        'sidepanel.title': "What's new in Magic: The Gathering?",
      }}
      ref={WhatsNewRef}
    />
  </div>;
};

export default WhatsNewExample;
```

## Details

| Props    |        Definition         |                         Type | Default | Required |
| -------- | :-----------------------: | ---------------------------: | ------: | -------: |
| prop     |       Example prop        |                       `Prop` |    null |     true |
| onChange | Example callback function | `(updatedOpt: Prop) => void` |    null |     true |

---

## Licence

[MIT](./LICENSE) License © [SchemeSonic](https://github.com/jaredpalmer/tsdx)
