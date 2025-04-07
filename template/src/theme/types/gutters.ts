import type {
  ArrayValue,
  RemoveAfterSeparator,
  RemoveBeforeSeparator,
  ToNumber,
} from './common';
import type { config } from '@/theme/_config';
import type { staticGutterStyles } from '@/theme/gutters';

export type Gutters = GapGutters &
  MarginGutters &
  PaddingGutters &
  typeof staticGutterStyles;

type GapGutters = {
  [key in Gaps]: {
    gap: ToNumber<RemoveBeforeSeparator<key>>;
  };
};

type Gaps = `gap_${ArrayValue<typeof config.gutters>}`;

type MarginGutters = {
  [key in MarginKeys]: Record<
    Extract<RemoveAfterSeparator<key>, Margins>,
    ToNumber<RemoveBeforeSeparator<key>>
  >;
};

type MarginKeys = `${Margins}_${ArrayValue<typeof config.gutters>}`;

type Margins =
  | 'margin'
  | 'marginBottom'
  | 'marginHorizontal'
  | 'marginLeft'
  | 'marginRight'
  | 'marginTop'
  | 'marginVertical';

type PaddingGutters = {
  [key in PaddingKeys]: Record<
    Extract<RemoveAfterSeparator<key>, Paddings>,
    ToNumber<RemoveBeforeSeparator<key>>
  >;
};

type PaddingKeys = `${Paddings}_${ArrayValue<typeof config.gutters>}`;

type Paddings =
  | 'padding'
  | 'paddingBottom'
  | 'paddingHorizontal'
  | 'paddingLeft'
  | 'paddingRight'
  | 'paddingTop'
  | 'paddingVertical';
