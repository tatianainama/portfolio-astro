import { darkTheme, lightTheme } from '@/styles/theme.css';

const theme = (() => {
  if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
    const theme = localStorage.getItem('theme');
    if (theme) return theme;
  }
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark';
  }
  return 'light';
})();

if (theme === 'dark') {
  document.documentElement.classList.remove(lightTheme);
  document.documentElement.classList.add(darkTheme);
} else {
  document.documentElement.classList.add(lightTheme);
  document.documentElement.classList.remove(darkTheme);
}

window.localStorage.setItem('theme', theme);
