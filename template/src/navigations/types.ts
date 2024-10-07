import type { StackScreenProps } from '@react-navigation/stack';
import type { Paths } from '@/navigations/paths';

export type RootStackParamList = {
  [Paths.Startup]: undefined;
  [Paths.Example]: undefined;
};

export type RootScreenProps<
  S extends keyof RootStackParamList = keyof RootStackParamList,
> = StackScreenProps<RootStackParamList, S>;
