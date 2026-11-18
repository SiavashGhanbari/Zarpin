import postcss from 'postcss';
import parse from 'postcss-safe-parser';

// Prototype classes represented by stories in src/prototype/. Keep the source
// order and include only matching alternatives of comma-separated selectors.
const families = {
  navigation: ['nav', 'nav-slot', 'nav-title', 'icon-btn', 'tabbar2', 'tab2', 'glass'],
  selection: ['agree', 'pay-opt', 'pay-t', 'pay-ic', 'pay-radio', 'sw', 'sw-card', 'sw-t', 'sec-div'],
  feedback: ['toast', 'snack', 'tip', 'tip-k', 'tip-ic', 'tip-ar'],
  sheet: ['modal', 'modal-backdrop', 'modal-sheet', 'sheet-header', 'sheet-footer'],
  faq: ['faq-list', 'faq-item', 'faq-q', 'faq-chev', 'faq-a'],
  onboarding: ['dp-emptyst', 'dp-empty-btn', 'in-title', 'in-img', 'in-list', 'in-ic', 'in-sub'],
  otp: ['otp', 'otp-box', 'otp-boxes'],
};
const scope = ':where(.zp-prototype)';
const classes = new Set(Object.values(families).flat());
const animationNames = ['blink', 'inImg'];

export function prototypePatterns(html, source) {
  const parsed = parse(source, { from: '../index.html' });
  const rootVariables = parsed.nodes.find(node => node.type === 'rule' && node.selector === ':root');
  if (!rootVariables) throw new Error('Cannot locate the prototype sizing and motion variables.');

  const extracted = postcss.root();
  extracted.append(postcss.comment({ text: 'Generated from component CSS in index.html.' }));
  extracted.append(rootVariables.clone({ selector: '.zp-prototype' }));

  const matched = new Set();
  function copyRules(input, output) {
    for (const node of input.nodes ?? []) {
      if (node.type === 'rule') {
        const selectors = node.selectors.filter(selector => {
          const used = Array.from(selector.matchAll(/\.([\w-]+)/g), match => match[1])
            .filter(name => classes.has(name));
          for (const name of used) matched.add(name);
          return used.length > 0;
        });
        if (selectors.length) output.append(node.clone({ selector: selectors.map(item => scope + ' ' + item).join(', ') }));
      } else if (node.type === 'atrule' && ['media', 'supports', 'container'].includes(node.name)) {
        const group = node.clone({ nodes: [] });
        copyRules(node, group);
        if (group.nodes.length) output.append(group);
      } else if (node.type === 'atrule' && node.name === 'keyframes' && animationNames.includes(node.params)) {
        output.append(node.clone({ params: 'zp-prototype-' + node.params }));
      }
    }
  }
  copyRules(parsed, extracted);

  const missing = [...classes].filter(name => !matched.has(name));
  if (missing.length) throw new Error('Prototype CSS selectors need a Storybook review: ' + missing.join(', '));

  extracted.walkDecls(/^animation(?:-name)?$/, declaration => {
    for (const name of animationNames) {
      declaration.value = declaration.value.replace(new RegExp('\\b' + name + '\\b', 'g'), 'zp-prototype-' + name);
    }
  });

  return { css: extracted.toString() + '\n', assets: assetsFrom(html) };
}

function assetsFrom(html) {
  const tabDeclaration = html.match(/const TAB_LIST\s*=\s*\[(.*?)\];/)?.[1] ?? '';
  const icons = html.match(/const ICONS\s*=\s*\{[^\n]*\n([\s\S]*?)^\s*\};/m)?.[1] ?? '';
  const tabs = Array.from(tabDeclaration.matchAll(/\['([\w-]+)',\s*'([^']+)'\]/g), ([, id, label]) => {
    const line = icons.match(new RegExp('^\\s*' + id + ':\\s*\\[(.+)$', 'm'))?.[1] ?? '';
    const glyphs = line.match(/<svg\b.*?<\/svg>/g) ?? [];
    if (glyphs.length !== 2) throw new Error('Prototype navigation icons need a Storybook review for ' + id + '.');
    return { id, label, glyphs };
  });
  const stakeIllustration = html.match(/const STAKE_IMG\s*=\s*'(data:image\/png;base64,[a-z0-9+/=]+)'/i)?.[1];
  const successIcon = html.match(/const OK_ICON\s*=\s*'(<svg\b.*?<\/svg>)'/)?.[1];
  const faqChevron = html.match(/const FAQ_CHEV\s*=\s*'(<svg\b.*?<\/svg>)'/)?.[1];
  if (!tabs.length || !stakeIllustration || !successIcon || !faqChevron) {
    throw new Error('Cannot locate an icon, navigation label, or savings illustration used by the Storybook.');
  }
  return { tabs, stakeIllustration, successIcon, faqChevron };
}
