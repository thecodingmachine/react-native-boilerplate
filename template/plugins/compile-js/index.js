const promptsOptions = require('./_prompts');
const { apply } = require('./plugin');

module.exports = {
  name: 'typescript',
  promptsOptions,
  apply,
};
