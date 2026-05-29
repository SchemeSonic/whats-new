import { Announcement } from '..';

interface RawTag {
  text?: string;
  color?: string;
  backgroundColor?: string;
}

function stripQuotes(s: string): string {
  return s.trim().replace(/^['"]|['"]$/g, '');
}

function parseYamlFrontmatter(content: string): Record<string, unknown> {
  const result: Record<string, unknown> = {};
  const lines = content.split('\n');
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];
    if (!line.trim()) {
      i++;
      continue;
    }

    // Key with array value (no value on same line)
    const arrayKeyMatch = line.match(/^([a-zA-Z_]+):\s*$/);
    if (arrayKeyMatch) {
      const key = arrayKeyMatch[1];
      const items: Record<string, string>[] = [];
      i++;
      let currentItem: Record<string, string> | null = null;

      while (i < lines.length && lines[i].startsWith(' ')) {
        const l = lines[i];
        const newItemMatch = l.match(/^\s+-\s+(\w+):\s*(.*)$/);
        if (newItemMatch) {
          if (currentItem) items.push(currentItem);
          currentItem = { [newItemMatch[1]]: stripQuotes(newItemMatch[2]) };
          i++;
          continue;
        }
        const propMatch = l.match(/^\s+(\w+):\s*(.*)$/);
        if (propMatch && currentItem) {
          currentItem[propMatch[1]] = stripQuotes(propMatch[2]);
        }
        i++;
      }
      if (currentItem) items.push(currentItem);
      result[key] = items;
      continue;
    }

    // Simple key: value (including inline empty array "key: []")
    const kvMatch = line.match(/^([a-zA-Z_]+):\s*(.+)$/);
    if (kvMatch) {
      const val = kvMatch[2].trim();
      result[kvMatch[1]] = val === '[]' ? [] : stripQuotes(val);
      i++;
      continue;
    }

    i++;
  }

  return result;
}

/**
 * Parses a markdown string with YAML frontmatter into an Announcement.
 *
 * Format:
 * ```md
 * ---
 * title: My Announcement
 * date: 2024-06-01
 * version: v2.0.0          (optional)
 * tags:
 *   - text: New Feature
 *     color: rgba(0,0,0,0.87)
 *     backgroundColor: '#99d066'
 * ---
 *
 * Overview shown in the list. Supports **markdown**.
 *
 * <!-- more -->
 *
 * Full content shown in the detail modal. Supports **markdown**.
 * ```
 *
 * The `<!-- more -->` separator is optional. If omitted, the entire body
 * becomes the overview and the detail modal button will not appear.
 */
export function parseAnnouncement(md: string): Announcement {
  const match = md.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);

  if (!match) {
    throw new Error(
      'Invalid announcement format: missing YAML frontmatter (expected --- delimiters)'
    );
  }

  const fm = parseYamlFrontmatter(match[1]);
  const body = match[2].trim();

  const [overviewPart, contentPart = ''] = body.split(/<!--\s*more\s*-->/);

  const title = fm['title'] as string | undefined;
  const dateStr = fm['date'] as string | undefined;
  const version = fm['version'] as string | undefined;
  const rawTags = (fm['tags'] as RawTag[] | undefined) ?? [];

  if (!title) {
    throw new Error('Announcement frontmatter is missing required field: title');
  }
  if (!dateStr) {
    throw new Error('Announcement frontmatter is missing required field: date');
  }

  return {
    title,
    date: new Date(dateStr),
    version,
    tags: rawTags.map((t) => ({
      text: t.text ?? '',
      color: t.color,
      backgroundColor: t.backgroundColor,
    })),
    overview: overviewPart.trim(),
    content: contentPart.trim(),
  };
}

/**
 * Parses multiple markdown strings into an array of Announcements.
 * Announcements are returned in the same order as the input array.
 */
export function parseAnnouncements(mds: string[]): Announcement[] {
  return mds.map(parseAnnouncement);
}
