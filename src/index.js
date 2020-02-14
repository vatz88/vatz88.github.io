import './index.scss';

import App from './App.svelte';

const app = new App({
  target: document.body,
});

const consolestyles = fontSize =>
  [`font-size: ${fontSize}px`, 'color: #757575'].join(';');
console.log('%cvatz88', consolestyles(44));
console.log(
  '%cDid you know you can toggle the theme? Click on my photo!',
  consolestyles(22),
);
