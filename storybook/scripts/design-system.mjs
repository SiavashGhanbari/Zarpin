// Zarpin design system tooling. One file, three commands:
//
//   node scripts/design-system.mjs prepare   → data Storybook reads (run automatically by `pnpm storybook`)
//   node scripts/design-system.mjs sync      → copy tokens + components into the app (index.html)
//   node scripts/design-system.mjs check     → is the app in sync, and do tokens match Figma?
//
// Source of truth: tokens/tokens.css (colours, type, font) and src/ds/components.css.
// The app never gets edited by hand inside the DS block; it receives a copy.
import { mkdir, readFile, writeFile } from 'node:fs/promises';

const root = new URL('../', import.meta.url);
const app = new URL('../index.html', root);
const tokensFile = new URL('tokens/tokens.css', root);
const componentsFile = new URL('src/ds/components.css', root);
const figmaFile = new URL('tokens/figma-variables.txt', root);
const generated = new URL('src/generated/', root);

const BEGIN = '/* ==== Zarpin design system — copied from storybook/ by `pnpm sync:app`. Do not edit here. ==== */';
const END = '/* ==== end of Zarpin design system ==== */';
const LEGACY_BEGIN = '/* ===== Zarpin design tokens';
const LEGACY_END = '/* ---------- Tokens (from references';

const read = url => readFile(url, 'utf8');

async function designSystemBlock() {
  const [tokens, components] = await Promise.all([read(tokensFile), read(componentsFile)]);
  return BEGIN + '\n' + tokens.trim() + '\n' + components.trim() + '\n' + END + '\n';
}

function locate(html) {
  let start = html.indexOf(BEGIN), end = html.indexOf(END);
  if (start >= 0 && end > start) return [start, end + END.length + 1];
  start = html.indexOf(LEGACY_BEGIN); end = html.indexOf(LEGACY_END, start);
  if (start >= 0 && end > start) return [start, end];
  throw new Error('Cannot find the design system block in index.html.');
}

function cssVariables(css) {
  const groups = {};
  const blocks = css.replace(/\/\*[\s\S]*?\*\//g, '').matchAll(/([^{}]+)\{([^{}]*)\}/g);
  for (const [, selector, body] of blocks) {
    const scope = selector.includes('[data-theme="dark"]') ? 'dark' : selector.trim() === ':root' ? 'root' : null;
    if (!scope) continue;
    for (const [, name, value] of body.matchAll(/--([\w-]+)\s*:\s*([^;]+);/g)) (groups[scope] ??= {})[name] = value.trim();
  }
  return groups;
}

function figmaVariables(text) {
  const out = { primitives: {}, light: {}, dark: {}, typography: {} };
  for (const line of text.split('\n')) {
    if (!line || line.startsWith('#')) continue;
    const [collection, name, a, b] = line.split('|');
    const css = name.toLowerCase().replace(/\s*-\s*(\d+)$/, '-$1').replace(/\//g, '-');
    if (collection === 'Primitives') out.primitives[css] = a;
    else if (collection === 'Semantic') { out.light[css] = a; out.dark[css] = b; }
    else if (collection === 'Typography') {
      const t = name.replace(/^fontSize\//, 'font-size/').replace(/^lineHeight\//, 'line-height/')
        .replace(/^fontfamily\/fontname$/, 'font-family').toLowerCase().replace(/\//g, '-');
      out.typography[t] = a;
    }
  }
  return out;
}

const hex = value => {
  const m = value.trim().toLowerCase().match(/^#([0-9a-f]{6})([0-9a-f]{2})?$/);
  return m ? [0, 2, 4, 6].map(i => parseInt((m[1] + (m[2] ?? 'ff')).slice(i, i + 2), 16)) : null;
};
function same(css, figma) {
  if (css === undefined) return false;
  const a = hex(css), b = hex(figma);
  if (a && b) return a.every((v, i) => Math.abs(v - b[i]) <= 1);            // 12% alpha: 1e vs 1f
  if (/^\d+$/.test(figma)) return css.replace(/px$/, '') === figma;
  return css.toLowerCase().includes(figma.toLowerCase());
}

async function compareWithFigma() {
  const css = cssVariables(await read(tokensFile));
  const figma = figmaVariables(await read(figmaFile));
  const rows = [];
  const scopes = [['primitives', 'root'], ['light', 'root'], ['dark', 'dark'], ['typography', 'root']];
  for (const [group, scope] of scopes) {
    for (const [name, value] of Object.entries(figma[group])) {
      const mine = css[scope]?.[name];
      if (!same(mine, value)) rows.push({ group, token: '--' + name, figma: value, code: mine ?? '—' });
    }
  }
  const known = new Set(Object.values(figma).flatMap(g => Object.keys(g)));
  for (const name of Object.keys(css.root ?? {})) {
    if (!known.has(name) && !/^(font-weight|font-family)/.test(name)) rows.push({ group: 'code only', token: '--' + name, figma: '—', code: css.root[name] });
  }
  return rows;
}

async function prepare() {
  await mkdir(generated, { recursive: true });
  const tokens = await read(tokensFile);
  const vars = cssVariables(tokens);
  const pick = (from, test) => Object.fromEntries(Object.entries(from ?? {}).filter(([k]) => test(k)));
  const isType = k => /^(font|line-height)/.test(k);
  const lightNames = new Set(Object.keys(figmaVariables(await read(figmaFile)).light));
  await Promise.all([
    writeFile(new URL('tokens.css', generated), tokens),
    writeFile(new URL('tokens.json', generated), JSON.stringify({
      primitives: pick(vars.root, k => !isType(k) && !lightNames.has(k)),
      light: pick(vars.root, k => lightNames.has(k)),
      dark: vars.dark ?? {},
      typography: pick(vars.root, isType),
    }, null, 2) + '\n'),
    writeFile(new URL('figma-diff.json', generated), JSON.stringify(await compareWithFigma(), null, 2) + '\n'),
  ]);
}

async function sync() {
  const html = await read(app);
  const [start, end] = locate(html);
  await writeFile(app, html.slice(0, start) + await designSystemBlock() + html.slice(end));
  console.log('index.html now uses the design system from storybook/.');
}

async function check() {
  const html = await read(app);
  const [start, end] = locate(html);
  const inSync = html.slice(start, end) === await designSystemBlock();
  const diff = await compareWithFigma();
  console.log(inSync ? '✓ App: index.html uses the current design system.' : '✗ App: index.html is behind. Run `pnpm sync:app`.');
  console.log(diff.length ? `• Figma: ${diff.length} token(s) differ. See Storybook → Foundations → Figma sync.` : '✓ Figma: all tokens match.');
  if (!inSync) process.exitCode = 1;
}

const command = process.argv[2];
if (command === 'prepare') await prepare();
else if (command === 'sync') await sync();
else if (command === 'check') await check();
else { console.error('Usage: design-system.mjs prepare | sync | check'); process.exitCode = 2; }
