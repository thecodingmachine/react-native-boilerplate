import { config } from '@/theme/theme.config';

import { ArrayValue, RemoveBeforeSeparator, ToNumber } from './common';
import { UnionConfiguration } from './config';

type BorderColorKeys =
  `border_${keyof UnionConfiguration['borders']['colors']}`;

export type BorderColors = {
  [key in BorderColorKeys]: RemoveBeforeSeparator<key> extends keyof UnionConfiguration['borders']['colors']
    ? {
        borderColor: UnionConfiguration['borders']['colors'][RemoveBeforeSeparator<key>];
      }
    : never;
};

type BorderRadiusKeys = `rounded_${ArrayValue<typeof config.borders.radius>}`;

export type BorderRadius = {
  [key in BorderRadiusKeys]: {
    borderRadius: ToNumber<RemoveBeforeSeparator<key>>;
  };
};

type BorderWidthKeys = `border_${ArrayValue<typeof config.borders.widths>}`;

export type BorderWidths = {
  [key in BorderWidthKeys]: {
    borderWidth: ToNumber<RemoveBeforeSeparator<key>>;
  };
};

export type Borders = BorderColors & BorderRadius & BorderWidths;
