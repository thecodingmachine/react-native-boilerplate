import type { UnionConfiguration } from './config';

export type Colors = UnionConfiguration['backgrounds'] &
	UnionConfiguration['borders']['colors'] &
	UnionConfiguration['fonts']['colors'] &
	UnionConfiguration['navigationColors'];
