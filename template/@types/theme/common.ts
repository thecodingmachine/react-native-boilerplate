import { config } from '@/theme/theme.config';

export type ArrayValue<T extends readonly any[]> = T[number];

export type RemoveAfterSeparator<S extends string> =
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  S extends `${infer Before}_${infer _}` ? Before : S;

export type RemoveBeforeSeparator<S extends string> =
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  S extends `${infer _}_${infer After}` ? After : S;

export type ToNumber<
  S extends string,
  T extends any[] = [],
> = S extends `${T['length']}` ? T['length'] : ToNumber<S, [...T, '']>;

export type AllPartial<T> = {
  [K in keyof T]?: T[K] extends Record<string, unknown>
    ? AllPartial<T[K]>
    : T[K];
};

export function hasProperty<Config, KeyPath extends string>(
  configuration: Config,
  property: KeyPath,
): configuration is HasProperty<Config, KeyPath> & Config {
  const parts = property.split('.');
  let currentObj: any = configuration;

  for (const part of parts) {
    if (!(part in currentObj)) {
      return false;
    }

    currentObj = currentObj[part];
  }

  return true;
}

type KeysOfUnion<T> = T extends T ? keyof T : never;

type HasProperty<
  Config,
  KeyPath extends string,
> = KeyPath extends `${infer Key}.${infer Rest}`
  ? Key extends keyof typeof config
    ? {
        readonly [_ in Key]: Key extends KeysOfUnion<Config>
          ? HasProperty<Extract<Config, { [_ in Key]: unknown }>[Key], Rest>
          : HasProperty<
              Extract<typeof config, { [_ in Key]: unknown }>[Key],
              Rest
            >;
      }
    : never
  : KeyPath extends KeysOfUnion<Config>
  ? {
      readonly [_ in KeyPath]: Extract<
        Config,
        { [_ in KeyPath]: unknown }
      >[KeyPath];
    }
  : { readonly [_ in KeyPath]: never };
