import './index.scss';

import App from './App.svelte';

const app = new App({
  target: document.body,
});

const consolestyles = fontSize =>
  [`font-size: ${fontSize}px`, 'color: #757575'].join(';');
console.log(
  `%cWell, there's nothing hidden here but if you haven't figured it out yet, you can toggle theme by clicking on my face.`,
  consolestyles(24),
);
