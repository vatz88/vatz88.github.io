import { writable } from 'svelte/store';

export const THEMES = {
  dark: 'dark',
  light: 'light',
};

// Ref https://github.com/GoogleChromeLabs/dark-mode-toggle/blob/master/src/dark-mode-toggle.mjs
const PREFERS_COLOR_SCHEME = 'prefers-color-scheme';
const LIGHT = 'light';
const MQ_LIGHT = `(${PREFERS_COLOR_SCHEME}:${LIGHT})`;
const NOT_ALL = 'not all';

const hasNativePrefersColorScheme =
  window.matchMedia(MQ_LIGHT).media !== NOT_ALL;

const defaultTheme =
  hasNativePrefersColorScheme && window.matchMedia(MQ_LIGHT).matches
    ? THEMES.light
    : THEMES.dark;

export const theme = writable(defaultTheme);

if (hasNativePrefersColorScheme) {
  window.matchMedia(MQ_LIGHT).addListener(({ matches }) => {
    const newTheme = matches ? THEMES.light : THEMES.dark;
    theme.set(newTheme);
  });
}
