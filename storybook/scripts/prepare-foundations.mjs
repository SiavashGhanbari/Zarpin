import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { prototypePatterns } from './prototype-patterns.mjs';

const prototypeUrl = new URL('../../index.html', import.meta.url);
const outputDirectory = new URL('../src/generated/', import.meta.url);
const outputUrl = new URL('foundations.css', outputDirectory);
const tokensUrl = new URL('tokens.json', outputDirectory);

const html = await readFile(prototypeUrl, 'utf8');
const start = html.indexOf('/* ===== Zarpin design tokens');
const end = html.indexOf('/* ---------- Tokens (from references', start);
const css = start >= 0 && end > start ? html.slice(start, end).trim() : '';
const stylesEnd = html.indexOf('</style>', end);

if (!css.includes('--gold-500:') || !css.includes('[data-theme="dark"]') ||
    !css.includes('--font-family:') || !css.includes('@font-face') || stylesEnd <= end) {
  throw new Error('The design tokens, dark theme, or embedded font could not be read from index.html.');
}

const markers = [
  ['primitives', '/* Primitives */'],
  ['light', '/* Semantic — light */'],
  ['dark', '/* Semantic — dark'],
  ['typography', '/* Typography */'],
  ['end', '/* Text styles'],
];
const tokens = {};
for (const [index, [name, marker]] of markers.slice(0, -1).entries()) {
  const start = css.indexOf(marker);
  const end = css.indexOf(markers[index + 1][1], start);
  if (start < 0 || end <= start) throw new Error('Cannot locate the ' + name + ' token group.');
  tokens[name] = Object.fromEntries(
    Array.from(css.slice(start, end).matchAll(/--([\w-]+)\s*:\s*([^;]+);/g), match => [match[1], match[2].trim()])
  );
}

const patterns = prototypePatterns(html, html.slice(end, stylesEnd));
const previewDirectory = new URL('prototype/', outputDirectory);
await mkdir(previewDirectory, { recursive: true });
await Promise.all([
  writeFile(new URL('index.html', previewDirectory), html),
  writeFile(outputUrl, '/* Generated from the design token block in index.html. */\n' + css + '\n'),
  writeFile(tokensUrl, JSON.stringify(tokens, null, 2) + '\n'),
  writeFile(new URL('prototype-patterns.css', outputDirectory), patterns.css),
  writeFile(new URL('prototype-assets.json', outputDirectory), JSON.stringify(patterns.assets) + '\n'),
]);
