import { RemoveBeforeSeparator } from './common';
import { UnionConfiguration } from './config';

type BackgroundKeys = `bg_${keyof UnionConfiguration['backgrounds']}`;

export type Backgrounds = {
  [key in BackgroundKeys]: RemoveBeforeSeparator<key> extends keyof UnionConfiguration['backgrounds']
    ? {
        backgroundColor: UnionConfiguration['backgrounds'][RemoveBeforeSeparator<key>];
      }
    : never;
};
