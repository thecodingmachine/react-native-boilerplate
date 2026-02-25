import type { config } from '@/theme/_config';

export type AllPartial<T> = {
  [K in keyof T]?: T[K] extends Record<string, unknown>
    ? AllPartial<T[K]>
    : T[K];
};

export type ArrayValue<T extends readonly unknown[]> = T[number];

export type HasProperty<
  Config,
  KeyPath extends string,
> = KeyPath extends `${infer Key}.${infer Rest}`
  ? Key extends keyof typeof config
    ? {
        readonly [_ in Key]: Key extends KeysOfUnion<Config>
          ? HasProperty<Extract<Config, Record<Key, unknown>>[Key], Rest>
          : HasProperty<
              Extract<typeof config, Record<Key, unknown>>[Key],
              Rest
            >;
      }
    : never
  : KeyPath extends KeysOfUnion<Config>
    ? Readonly<
        Record<KeyPath, Extract<Config, Record<KeyPath, unknown>>[KeyPath]>
      >
    : Readonly<Record<KeyPath, never>>;

export type RemoveAfterSeparator<S extends string> =
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  S extends `${infer Before}_${infer _}` ? Before : S;

export type RemoveBeforeSeparator<S extends string> =
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  S extends `${infer _}_${infer After}` ? After : S;

export type ToNumber<
  S extends string,
  T extends unknown[] = [],
> = S extends `${T['length']}` ? T['length'] : ToNumber<S, [...T, '']>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
