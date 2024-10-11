/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable no-console */
const { execSync, spawnSync } = require('node:child_process');

const TYPESCRIPT_VERSION = '5.6.3';

function isYarnAvailable() {
  try {
    return !!(
      execSync('yarn --version', {
        stdio: [0, 'pipe', 'ignore'],
      }).toString() || ''
    ).trim();
  } catch {
    return null;
  }
}
function isNpmAvailable() {
  try {
    return !!(
      execSync('npm --version', {
        stdio: [0, 'pipe', 'ignore'],
      }).toString() || ''
    ).trim();
  } catch {
    return null;
  }
}

module.exports = {
  async apply(value) {
    return new Promise((resolve) => {
      let packageManager = null;
      let addCmd = null;

      // react-native cli prefer yarn so we follow the same logic
      if (isYarnAvailable()) {
        packageManager = 'yarn';
        addCmd = 'add';
      } else if (isNpmAvailable()) {
        packageManager = 'npm';
        addCmd = 'install';
      }

      if (!packageManager) {
        console.error(
          '🚨 No package manager found. Please install yarn or npm.',
        );
        process.exit(1);
      }

      if (!value) {
        console.log('\n');

        console.log('📦 Loading the build tool...');
        const installTypeScriptCmd = spawnSync(
          packageManager,
          [addCmd, '-D', `typescript@${TYPESCRIPT_VERSION}`],
          { stdio: 'inherit' },
        );
        if (installTypeScriptCmd.error) {
          console.error(installTypeScriptCmd.error);
          process.exit(1);
        }

        console.log('🧱 Building the javascript source...');
        const transpileCmd = spawnSync(
          'npx',
          ['tsc', '--project', `plugins/compile-js/tsconfig.build.json`],
          { stdio: 'inherit' },
        );
        if (transpileCmd.error) {
          console.error(transpileCmd.error);
          process.exit(1);
        }

        try {
          console.log('🖼️  Copying assets...');
          execSync('cp -R src/theme/assets/images js/src/theme/assets/images');

          console.log('♻️  Replacing source...');
          execSync('rm -rf src', { stdio: 'pipe' });
          execSync('cp -R js/src ./src', { stdio: 'pipe' });
          execSync('rm -rf __mocks__', { stdio: 'pipe' });
          execSync('cp -R js/__mocks__ ./__mocks__', { stdio: 'pipe' });
          execSync('rm -rf js', { stdio: 'pipe' });
        } catch {
          console.error(
            '🚨 Failed to copy assets or replace source. If you are using windows, please use git bash.',
          );
          process.exit(1);
        }

        console.log('🌀 Removing types ...');
        execSync('rm -rf src/theme/types', { stdio: 'pipe' });
        execSync('rm -f src/navigation/paths.js', { stdio: 'pipe' });
        execSync('rm -f src/navigation/types.js', { stdio: 'pipe' });
      }

      resolve();
    });
  },
};
