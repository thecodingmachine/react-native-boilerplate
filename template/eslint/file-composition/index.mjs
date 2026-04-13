// @ts-check

import { createFileComposition } from 'eslint-plugin-project-structure';

import DomainApiConfig from './domain/domain.api.mjs';
import DomainQueryOptionConfig from './domain/domain.query-option.mjs';
import DomainSchemaConfig from './domain/domain.schema.mjs';
import HookConfig from './hook.mjs';

export const fileCompositionConfig = createFileComposition({
  filesRules: [
    ...DomainApiConfig.filesRules,
    ...DomainQueryOptionConfig.filesRules,
    ...DomainSchemaConfig.filesRules,
    ...HookConfig.filesRules,
  ],
});
