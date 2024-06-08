import { Color } from './utils';

type ScalesAmount<N extends number> = {
  [K in `${N}`]: string;
};

interface Scales extends ScalesAmount<12> {
  /** App background */
  1: string;
  /** Subtle background */
  2: string;
  /** UI element background */
  3: string;
  /** Hovered UI element background */
  4: string;
  /** Active / Selected UI element background */
  5: string;
  /** Subtle borders and separators */
  6: string;
  /** UI element border and focus rings */
  7: string;
  /** Hovered UI element border */
  8: string;
  /** Solid backgrounds */
  9: string;
  /** Hovered solid backgrounds */
  10: string;
  /** Low-contrast text */
  11: string;
  /** High-contrast text */
  12: string;
}

interface Color {
  dark: Scales;
  light: Scales;
}

const grey = Color.hsl([60, 3, 0]);

export const palette = {
  grey: {
    light: {
      1: grey.l(96).mk(),
      2: grey.l(94).mk(),
      3: grey.l(92).mk(),
      4: grey.l(86).mk(),
      5: grey.l(84).mk(),
      6: grey.l(80).mk(),
      7: grey.l(76).mk(),
      8: grey.l(68).mk(),
      9: grey.l(50).mk(),
      10: grey.l(36).mk(),
      11: grey.l(24).mk(),
      12: grey.l(14).mk(),
    },
    dark: {
      1: grey.l(6).mk(),
      2: grey.l(8).mk(),
      3: grey.l(14).mk(),
      4: grey.l(16).mk(),
      5: grey.l(18).mk(),
      6: grey.l(24).mk(),
      7: grey.l(28).mk(),
      8: grey.l(38).mk(),
      9: grey.l(44).mk(),
      10: grey.l(52).mk(),
      11: grey.l(72).mk(),
      12: grey.l(92).mk(),
    },
  },
} as const;
