/* eslint-disable @typescript-eslint/no-require-imports */
const promptsOptions = require('./_prompts');
const { apply } = require('./plugin');

module.exports = {
  apply,
  name: 'printSuccess',
  promptsOptions,
};
