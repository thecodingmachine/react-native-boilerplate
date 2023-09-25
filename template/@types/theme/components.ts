import * as componentGenerators from '@/theme/components';
import { ComponentTheme } from 'types/theme/theme';

type FunctionToReturn<O extends object> = {
  [K in keyof O]: O[K] extends (theme: ComponentTheme) => infer R ? R : never;
};

export type Components = FunctionToReturn<typeof componentGenerators>;
