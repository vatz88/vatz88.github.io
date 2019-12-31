import { writable } from 'svelte/store';

export const THEMES = {
  dark: 'dark',
  light: 'light',
};

export const theme = writable(THEMES.dark);
