import type { StackScreenProps } from '@react-navigation/stack';

export type ApplicationStackParamList = {
	Startup: undefined;
	Home: undefined;
};

export type ApplicationScreenProps =
	StackScreenProps<ApplicationStackParamList>;
