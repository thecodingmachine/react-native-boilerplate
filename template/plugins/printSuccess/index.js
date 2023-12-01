// eslint-disable-next-line @typescript-eslint/no-var-requires
const promptsOptions = require('./_prompts');
// eslint-disable-next-line @typescript-eslint/no-var-requires,@typescript-eslint/unbound-method
const { apply } = require('./plugin');

module.exports = {
	name: 'printSuccess',
	promptsOptions,
	apply,
};
