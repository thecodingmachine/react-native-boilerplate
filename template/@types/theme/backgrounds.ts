import { RemoveBeforeSeparator } from './common';
import { UnionConfiguration } from './config';

type BackgroundKeys = keyof UnionConfiguration['backgrounds'] extends string
  ? `bg_${keyof UnionConfiguration['backgrounds']}`
  : never;

export type Backgrounds = {
  [key in BackgroundKeys]: RemoveBeforeSeparator<key> extends keyof UnionConfiguration['backgrounds']
    ? {
        backgroundColor: UnionConfiguration['backgrounds'][RemoveBeforeSeparator<key>];
      }
    : never;
};
