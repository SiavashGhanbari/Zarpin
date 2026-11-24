// One-off helper: copies icons that already exist in the app (index.html) into
// src/ds/icons/, named after the Figma design-system icon they match.
// Icons the app does not contain yet are added to src/ds/icons/ by hand from Figma.
import { readFile, writeFile } from 'node:fs/promises';

const html = await readFile(new URL('../../index.html', import.meta.url), 'utf8');
const svgs = html.match(/<svg\b[^>]*>[\s\S]*?<\/svg>/g) ?? [];

// key: [style, figma name, unique start of the first path]
const fromApp = {
  'arrow-right': ['linear', 'Arrow/Arrow Right', 'M13.8997 5.39985C14.1926'],
  'chevron-left': ['linear', 'Arrow/Chevron — Left', 'M14.6882 6.31455C14.4893'],
  'chevron-down': ['linear', 'Arrow/Chevron — Down', 'M6.31455 9.31175C6.11314'],
  close: ['linear', 'Arrow/Close', 'M2.00008 22.8601C1.78008'],
  search: ['linear', 'Search/Search Normal', 'M19.25 11C19.25 6.44365'],
  edit: ['linear', 'Essential/Edit', 'M11.9202 12.75H10.0502'],
  copy: ['linear', 'Design Tools/Copy', 'M15.25 12.9004C15.25 11.2244'],
  trash: ['linear', 'Essential/Trash', 'M10.9802 4.73047C14.3454'],
  'info-circle': ['linear', 'Essential/Info Circle', 'M21.25 12C21.25 6.91421 17.0858'],
  danger: ['linear', 'Essential/Danger', 'M11.2498 14V9C11.2498'],
  'close-circle': ['linear', 'Essential/Close Circle', 'M14.3 8.63955C14.5929'],
  eye: ['linear', 'Security/Eye', 'M14.8298 12C14.8298 10.4342'],
  'eye-slash': ['linear', 'Security/Eye Slash', 'M11.9998 7.66992C13.1975'],
  clock: ['linear', 'Time/Clock', 'M10.8799 11.6094V7.50977'],
  document: ['linear', 'Content/Document Text', 'M13.75 6.5V4.5C13.75'],
  'tick-circle-bold': ['bold', 'Essential/Tick Circle', 'M16.78 9.7L11.11 15.37'],
  'info-circle-bold': ['bold', 'Essential/Info Circle', 'M11.25 8C11.25 7.59 11.59'],
  'close-circle-bold': ['bold', 'Essential/Close Circle', 'M15.36 14.3C15.65 14.59'],
};

function normalize(svg) {
  return svg
    .replace(/\s(class|aria-hidden|style)="[^"]*"/g, '')
    .replace(/\swidth="[^"]*"/, ' width="24"')
    .replace(/\sheight="[^"]*"/, ' height="24"')
    .replace(/fill="(#000000|black|#292D32|#0A0A0A)"/gi, 'fill="currentColor"')
    .replace(/stroke="(#000000|black|#292D32|#0A0A0A)"/gi, 'stroke="currentColor"')
    .replace(/^<svg(?![^>]*xmlns)/, '<svg xmlns="http://www.w3.org/2000/svg"')
    .replace(/\s+/g, ' ')
    .trim() + '\n';
}

const manifest = {};
for (const [key, [style, figma, prefix]] of Object.entries(fromApp)) {
  const svg = svgs.find(item => item.includes(prefix));
  if (!svg) throw new Error('Icon ' + key + ' is no longer in index.html.');
  await writeFile(new URL('../src/ds/icons/' + key + '.svg', import.meta.url), normalize(svg));
  manifest[key] = { figma, style };
}

// Bottom navigation: the app keeps outline + bold glyphs per tab in const ICONS.
const block = html.match(/const ICONS\s*=\s*\{[^\n]*\n([\s\S]*?)^\s*\};/m)?.[1] ?? '';
for (const id of ['home', 'trade', 'wallet']) {
  const line = block.match(new RegExp('^\\s*' + id + ':\\s*\\[(.+)$', 'm'))?.[1] ?? '';
  const [linear, bold] = line.match(/<svg\b.*?<\/svg>/g) ?? [];
  if (!linear || !bold) throw new Error('Tab icon ' + id + ' is missing in index.html.');
  await writeFile(new URL('../src/ds/icons/tab-' + id + '.svg', import.meta.url), normalize(linear));
  await writeFile(new URL('../src/ds/icons/tab-' + id + '-bold.svg', import.meta.url), normalize(bold));
  manifest['tab-' + id] = { figma: 'Bottom Navigation', style: 'linear' };
  manifest['tab-' + id + '-bold'] = { figma: 'Bottom Navigation', style: 'bold' };
}
console.log(JSON.stringify(manifest, null, 2));
