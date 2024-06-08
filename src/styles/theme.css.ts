import {
  createGlobalTheme,
  createTheme,
  createThemeContract,
} from '@vanilla-extract/css';
import { palette } from './colors.ts';
import { mapValues } from 'remeda';

export const colors = createThemeContract(
  mapValues(palette, (color) => mapValues(color.dark, () => null))
);

export const lightTheme = createTheme(
  colors,
  mapValues(palette, (color) => color.light)
);

export const darkTheme = createTheme(
  colors,
  mapValues(palette, (color) => color.dark)
);

const root = createGlobalTheme(`:root`, {});

export const vars = { ...root, colors };
