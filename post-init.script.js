#!/usr/bin/env node
const { rmdir } = require('fs').promises;
const { applyPlugins } = require('./template/plugins');

applyPlugins().then(async () => {
  await rmdir('./plugins', { recursive: true });
});
