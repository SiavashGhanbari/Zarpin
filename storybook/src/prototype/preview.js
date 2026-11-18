import { element } from '../components.js';

let nextId = 0;

export function stage(className = '') {
  return element('div', 'zp-prototype zp-prototype-stage ' + className);
}

export function uniqueId(name) {
  return 'zp-' + name + '-' + ++nextId;
}

export function glyph(markup) {
  const parsed = new DOMParser().parseFromString(markup, 'image/svg+xml');
  return document.importNode(parsed.documentElement, true);
}
