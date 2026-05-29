import { render } from '@testing-library/react';
import { WhatsNew, parseAnnouncement, parseAnnouncements } from '../src';

describe('WhatsNew', () => {
  it('renders without crashing', () => {
    render(<WhatsNew announcements={[]} />);
  });
});

describe('parseAnnouncement', () => {
  const BASIC_MD = `---
title: Dark Mode
date: 2024-06-01
version: v2.0.0
tags:
  - text: New Feature
    color: rgba(0,0,0,0.87)
    backgroundColor: '#99d066'
---

Overview text here.

<!-- more -->

Full content here.`;

  it('parses title, date, version', () => {
    const a = parseAnnouncement(BASIC_MD);
    expect(a.title).toBe('Dark Mode');
    expect(a.date).toEqual(new Date('2024-06-01'));
    expect(a.version).toBe('v2.0.0');
  });

  it('parses tags with color and backgroundColor', () => {
    const a = parseAnnouncement(BASIC_MD);
    expect(a.tags).toHaveLength(1);
    expect(a.tags[0].text).toBe('New Feature');
    expect(a.tags[0].color).toBe('rgba(0,0,0,0.87)');
    expect(a.tags[0].backgroundColor).toBe('#99d066');
  });

  it('splits overview and content on <!-- more -->', () => {
    const a = parseAnnouncement(BASIC_MD);
    expect(a.overview).toBe('Overview text here.');
    expect(a.content).toBe('Full content here.');
  });

  it('treats entire body as overview when <!-- more --> is absent', () => {
    const md = `---
title: Simple
date: 2024-01-01
tags: []
---

Just an overview.`;
    const a = parseAnnouncement(md);
    expect(a.overview).toBe('Just an overview.');
    expect(a.content).toBe('');
  });

  it('parses multiple tags', () => {
    const md = `---
title: Multi Tag
date: 2024-01-01
tags:
  - text: New Feature
    backgroundColor: '#99d066'
  - text: Improvement
    color: '#fff'
    backgroundColor: '#ed8c22'
---

Overview.`;
    const a = parseAnnouncement(md);
    expect(a.tags).toHaveLength(2);
    expect(a.tags[1].text).toBe('Improvement');
    expect(a.tags[1].color).toBe('#fff');
  });

  it('throws when frontmatter is missing', () => {
    expect(() => parseAnnouncement('No frontmatter here.')).toThrow();
  });

  it('throws when title is missing', () => {
    const md = `---
date: 2024-01-01
tags: []
---
Body.`;
    expect(() => parseAnnouncement(md)).toThrow('title');
  });

  it('throws when date is missing', () => {
    const md = `---
title: No Date
tags: []
---
Body.`;
    expect(() => parseAnnouncement(md)).toThrow('date');
  });
});

describe('parseAnnouncements', () => {
  it('parses an array of md strings', () => {
    const md1 = `---\ntitle: A\ndate: 2024-01-01\ntags: []\n---\nOverview A.`;
    const md2 = `---\ntitle: B\ndate: 2024-02-01\ntags: []\n---\nOverview B.`;
    const result = parseAnnouncements([md1, md2]);
    expect(result).toHaveLength(2);
    expect(result[0].title).toBe('A');
    expect(result[1].title).toBe('B');
  });
});
