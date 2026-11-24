// Where each part of the design system lives in Figma («Zarpin — Design System»).
// null = not in Figma yet; Foundations → Figma coverage lists these.
const FILE = 'https://www.figma.com/design/QiMNwDbc3gNGNJ6S2WXdJS/Zarpin-%E2%80%94-Design-System?node-id=';

export const figma = {
  Colors: '795-434',
  Typography: '1182-620',
  Icons: '302-16',
  Logo: '1033-439',
  'Bank logos': '2227-11925',
  Button: '1296-2163',
  'Icon button': '2068-9011',
  'Text field': '2264-1726',
  Tag: '1870-3021',
  Checkbox: '2497-2',
  Radio: '2493-37',
  Divider: '2416-74',
  Header: '2067-47',
  'Bottom navigation': '1996-668',
  Snackbar: '2030-1273',
  Banner: '2448-23',
  Tooltip: '2490-1088',
  Switch: null,
  'Option row': null,
  'OTP input': null,
  'Bottom sheet': null,
  Dialog: null,
  Toast: null,
  'Step progress': null,
  'Copy field': null,
  'List item': null,
  Accordion: null,
  'Date picker': null,
};

export const figmaUrl = name => (figma[name] ? FILE + figma[name] : null);

// Story parameters: a short description plus a link to the Figma component (or a note that it is missing).
export function docs(name, text = '') {
  const url = figmaUrl(name);
  const link = url ? `[مشاهده در فیگما ↗](${url})` : '**در فیگما هنوز ساخته نشده است.**';
  return { docs: { description: { component: [text, link].filter(Boolean).join('\n\n') } }, figma: url };
}
