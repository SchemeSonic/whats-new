# @schemesonic/whats-new

> A React component for announcing new features to your users.

[![NPM](https://img.shields.io/npm/v/@schemesonic/whats-new.svg)](https://www.npmjs.com/package/@schemesonic/whats-new)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/SchemeSonic/whats-new/graphs/commit-activity)
[![GitHub license](https://img.shields.io/github/license/SchemeSonic/whats-new)](https://github.com/SchemeSonic/whats-new/blob/main/LICENSE)
[![Netlify Status](https://api.netlify.com/api/v1/badges/ed06153b-5f15-4305-b897-22ed648b95ae/deploy-status)](https://app.netlify.com/sites/react-whats-new/deploys)

## Demo

| Announcements | Announcement Details |
| --- | :---: |
| <img src="https://raw.githubusercontent.com/SchemeSonic/whats-new/main/img/sidepanel.png" alt="Announcements" style="max-height: 500px"> | <img src="https://raw.githubusercontent.com/SchemeSonic/whats-new/main/img/modal.png" alt="Announcement Details" style="max-height: 500px"> |

> https://react-whats-new.netlify.app

---

## Install

```bash
npm install @schemesonic/whats-new
```

### Peer Dependencies

This package requires the following peer dependencies:

```bash
npm install @mui/material @emotion/react @emotion/styled react-markdown rehype-raw remark-gfm
```

| Package | Version |
| --- | --- |
| `react` | `>=19` |
| `react-dom` | `>=19` |
| `@mui/material` | `^9.0.0` |
| `@emotion/react` | `^11.0.0` |
| `@emotion/styled` | `^11.0.0` |
| `react-markdown` | `^10.0.0` |
| `rehype-raw` | `^7.0.0` |
| `remark-gfm` | `^4.0.0` |

---

## Usage

```tsx
import { useRef, useState } from 'react';
import { Badge, Button } from '@mui/material';
import { WhatsNew, WhatsNewService } from '@schemesonic/whats-new';

const announcements = [
  {
    title: 'New Feature: Dark Mode',
    date: new Date('2024-06-01'),
    version: 'v2.0.0',
    tags: [
      {
        text: 'New Feature',
        color: 'rgba(0,0,0,0.87)',
        backgroundColor: '#99d066',
      },
    ],
    overview: '### Dark mode is here!\nSwitch between light and dark themes.',
    content: '## Dark Mode\n\nFull details about the dark mode feature...',
  },
];

const App = () => {
  const whatsNewRef = useRef(null);
  const [unreadCount, setUnreadCount] = useState(
    WhatsNewService.getUnreadCount(announcements)
  );

  return (
    <div>
      <Badge badgeContent={unreadCount} color="secondary" overlap="rectangular">
        <Button
          color="primary"
          variant="outlined"
          onClick={() => {
            whatsNewRef.current?.togglePanel();
            setUnreadCount(WhatsNewService.getUnreadCount(announcements));
          }}
        >
          What's New
        </Button>
      </Badge>

      <WhatsNew
        ref={whatsNewRef}
        announcements={announcements}
        translation={{
          'sidepanel.title': "What's New",
        }}
      />
    </div>
  );
};
```

---

## Markdown File Support

Announcements can be written as `.md` files with YAML frontmatter and parsed at build time using `parseAnnouncement` / `parseAnnouncements`. Both approaches can be mixed freely — the `WhatsNew` component always receives a plain `Announcement[]` regardless of how the data was created.

### Markdown format

```md
---
title: New Feature: Dark Mode
date: 2024-06-01
version: v2.0.0
tags:
  - text: New Feature
    color: rgba(0,0,0,0.87)
    backgroundColor: '#99d066'
  - text: Improvement
    color: '#fff'
    backgroundColor: '#ed8c22'
---

Short overview shown in the announcement list. Supports **markdown**.

<!-- more -->

## Full Details

Complete content shown in the detail modal.
Also supports **markdown** including images, tables, etc.
```

The `<!-- more -->` separator divides `overview` (shown in the list card) from `content` (shown in the detail modal). If omitted, the entire body becomes the overview and the "Show details" button will not appear.

### Parsing with Vite

Import `.md` files as raw strings using the `?raw` suffix, then parse them:

```ts
import darkModeMd from './announcements/dark-mode.md?raw';
import fixMd from './announcements/quick-fix.md?raw';
import { parseAnnouncement, parseAnnouncements } from '@schemesonic/whats-new';

// Parse individually
const darkMode = parseAnnouncement(darkModeMd);

// Or parse a batch
const announcements = parseAnnouncements([darkModeMd, fixMd]);
```

### Mixing inline and file-based announcements

```ts
import v2Md from './announcements/v2.md?raw';
import { parseAnnouncement } from '@schemesonic/whats-new';

const announcements = [
  parseAnnouncement(v2Md),       // from .md file
  {                               // inline object
    title: 'Quick fix',
    date: new Date('2024-07-01'),
    overview: 'Fixed a minor issue.',
    content: '',
    tags: [{ text: 'Fix', backgroundColor: '#f44336', color: '#fff' }],
  },
];
```

---

## API

### `<WhatsNew />`

The main component. Renders a side panel and a detail modal. Control it via a ref.

| Prop | Type | Required | Description |
| --- | --- | --- | --- |
| `announcements` | `Announcement[]` | ✓ | List of announcements to display |
| `translation` | `Record<string, string>` | | Override default UI strings (see [Translation](#translation)) |
| `ref` | `React.Ref` | | Ref to imperatively control the panel |

#### Ref methods

```ts
whatsNewRef.current.openPanel()   // Open the side panel
whatsNewRef.current.closePanel()  // Close the side panel
whatsNewRef.current.togglePanel() // Toggle the side panel + mark as read
```

---

### `Announcement`

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `title` | `string` | ✓ | Announcement title |
| `overview` | `string` | ✓ | Short summary shown in the list (supports Markdown) |
| `content` | `string` | | Full details shown in the modal (supports Markdown) |
| `date` | `Date` | ✓ | Publication date |
| `version` | `string` | | Version label (e.g. `v2.0.0`) |
| `tags` | `Tag[]` | ✓ | Colored tags shown on the card |

### `Tag`

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `text` | `string` | ✓ | Tag label |
| `color` | `string` | | Text color (any CSS color value) |
| `backgroundColor` | `string` | | Background color (any CSS color value) |

---

### `parseAnnouncement(md: string): Announcement`

Parses a single markdown string with YAML frontmatter into an `Announcement` object. Throws if required fields (`title`, `date`) are missing or if the frontmatter delimiters are absent.

### `parseAnnouncements(mds: string[]): Announcement[]`

Parses an array of markdown strings. Returns announcements in the same order as the input.

---

### `WhatsNewService`

Static service for tracking read state via `localStorage`.

```ts
// Returns the number of announcements newer than the last read date
WhatsNewService.getUnreadCount(announcements: Announcement[]): number

// Saves the current timestamp as the last read date
WhatsNewService.setLastReadDate(): void

// Returns the stored last read date, or null
WhatsNewService.getLastReadDate(): Date | null
```

---

### Translation

Override the default UI strings by passing a `translation` prop:

```tsx
<WhatsNew
  announcements={announcements}
  translation={{
    'sidepanel.title': "What's new?",
    'announcement-card.details-button': 'Read more ›',
  }}
/>
```

| Key | Default |
| --- | --- |
| `sidepanel.title` | `What's new?` |
| `announcement-card.details-button` | `Show details ❯` |

---

## License

[MIT](./LICENSE) © [SchemeSonic](https://github.com/SchemeSonic)
