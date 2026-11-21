const preview = route => () => {
  const frame = document.createElement('iframe');
  frame.title = route === 'Credit' ? 'درخواست اعتبار' : 'جزئیات خرید قسطی';
  frame.src = new URL('./prototype/index.html?p=' + route, document.baseURI).href;
  frame.style.cssText = 'display:block;width:100%;height:850px;border:0';
  return frame;
};

export default {
  title: 'Patterns/Credit purchase',
  parameters: { layout: 'fullscreen' },
};

export const Request = { render: preview('Credit') };
export const Details = { render: preview('Credit/Details') };
