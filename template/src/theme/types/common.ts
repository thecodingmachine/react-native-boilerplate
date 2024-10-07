import type { config } from '@/theme/_config';

export type ArrayValue<T extends readonly unknown[]> = T[number];

export type RemoveAfterSeparator<S extends string> =
  S extends `${infer Before}_${infer _}` ? Before : S;

export type RemoveBeforeSeparator<S extends string> =
  S extends `${infer _}_${infer After}` ? After : S;

export type ToNumber<
  S extends string,
  T extends unknown[] = [],
> = S extends `${T['length']}` ? T['length'] : ToNumber<S, [...T, '']>;

export type AllPartial<T> = {
  [K in keyof T]?: T[K] extends Record<string, unknown>
    ? AllPartial<T[K]>
    : T[K];
};

type KeysOfUnion<T> = T extends T ? keyof T : never;

export type HasProperty<
  Config,
  KeyPath extends string,
> = KeyPath extends `${infer Key}.${infer Rest}`
  ? Key extends keyof typeof config
    ? {
        readonly [_ in Key]: Key extends KeysOfUnion<Config>
          ? HasProperty<Extract<Config, { [__ in Key]: unknown }>[Key], Rest>
          : HasProperty<
              Extract<typeof config, { [___ in Key]: unknown }>[Key],
              Rest
            >;
      }
    : never
  : KeyPath extends KeysOfUnion<Config>
    ? {
        readonly [_ in KeyPath]: Extract<
          Config,
          { [__ in KeyPath]: unknown }
        >[KeyPath];
      }
    : { readonly [_ in KeyPath]: never };
