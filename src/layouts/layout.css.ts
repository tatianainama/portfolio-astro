import { globalStyle, style } from '@vanilla-extract/css';
import { vars } from '../styles/theme.css';

globalStyle('html', {
  background: vars.colors.grey[1],
  color: vars.colors.grey[9],
});

export const body = style({
  padding: 1,
});
