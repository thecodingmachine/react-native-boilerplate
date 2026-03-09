import type { ArrayValue, RemoveBeforeSeparator, ToNumber } from './common';
import type { UnionConfiguration } from './config';
import type { config } from '@/theme/_config';
import type { staticBorderStyles } from '@/theme/borders';

export type BorderBottomRadius = {
  [key in BorderBottomRadiusKeys]: {
    borderBottomLeftRadius: ToNumber<RemoveBeforeSeparator<key>>;
    borderBottomRightRadius: ToNumber<RemoveBeforeSeparator<key>>;
  };
};

export type BorderColors = {
  [key in BorderColorKeys]: RemoveBeforeSeparator<key> extends keyof UnionConfiguration['borders']['colors']
    ? {
        borderColor: UnionConfiguration['borders']['colors'][RemoveBeforeSeparator<key>];
      }
    : never;
};

export type BorderRadius = {
  [key in BorderRadiusKeys]: {
    borderRadius: ToNumber<RemoveBeforeSeparator<key>>;
  };
} & BorderBottomRadius &
  BorderTopRadius;

export type Borders = BorderColors &
  BorderRadius &
  BorderWidths &
  typeof staticBorderStyles;

export type BorderTopRadius = {
  [key in BorderTopRadiusKeys]: {
    borderTopLeftRadius: ToNumber<RemoveBeforeSeparator<key>>;
    borderTopRightRadius: ToNumber<RemoveBeforeSeparator<key>>;
  };
};

export type BorderWidths = {
  [key in BorderWidthKeys]: {
    borderWidth: ToNumber<RemoveBeforeSeparator<key>>;
  };
} & BorderWidthsBottom &
  BorderWidthsLeft &
  BorderWidthsRight &
  BorderWidthsTop;

export type BorderWidthsBottom = {
  [key in BorderWidthBottomKeys]: {
    borderWidth: ToNumber<RemoveBeforeSeparator<key>>;
  };
};

export type BorderWidthsLeft = {
  [key in BorderWidthLeftKeys]: {
    borderWidth: ToNumber<RemoveBeforeSeparator<key>>;
  };
};

export type BorderWidthsRight = {
  [key in BorderWidthRightKeys]: {
    borderWidth: ToNumber<RemoveBeforeSeparator<key>>;
  };
};

export type BorderWidthsTop = {
  [key in BorderWidthTopKeys]: {
    borderWidth: ToNumber<RemoveBeforeSeparator<key>>;
  };
};

type BorderBottomRadiusKeys = `roundedBottom_${ArrayValue<
  typeof config.borders.radius
>}`;

type BorderColorKeys = keyof UnionConfiguration['borders']['colors'];

type BorderRadiusKeys = `rounded_${ArrayValue<typeof config.borders.radius>}`;

type BorderTopRadiusKeys = `roundedTop_${ArrayValue<
  typeof config.borders.radius
>}`;

type BorderWidthBottomKeys = `wBottom_${ArrayValue<
  typeof config.borders.widths
>}`;

type BorderWidthKeys = `w_${ArrayValue<typeof config.borders.widths>}`;

type BorderWidthLeftKeys = `wLeft_${ArrayValue<typeof config.borders.widths>}`;

type BorderWidthRightKeys = `wRight_${ArrayValue<
  typeof config.borders.widths
>}`;

type BorderWidthTopKeys = `wTop_${ArrayValue<typeof config.borders.widths>}`;
