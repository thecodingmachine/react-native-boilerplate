const { execSync } = require('child_process');

const TYPESCRIPT_VERSION = '5.6.2';
const TYPESCRIPT_ESLINT_VERSION = '7.1.1';

function isYarnAvailable() {
  try {
    return !!(
      execSync('yarn --version', {
        stdio: [0, 'pipe', 'ignore'],
      }).toString() || ''
    ).trim();
  } catch (error) {
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
  } catch (error) {
    return null;
  }
}

module.exports = {
  async apply(value, previousValues) {
    return new Promise((resolve) => {
      let packageManager = null;

      // react-native cli prefer yarn so we follow the same logic
      if (isYarnAvailable()) {
        packageManager = 'yarn';
      } else if (isNpmAvailable()) {
        packageManager = 'npm';
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
        execSync(`${packageManager} add -D typescript@${TYPESCRIPT_VERSION}`);

        console.log('🧱 Building the javascript source...');
        execSync(
          'npx tsc --jsx react-native --module ESNext --outDir js --noEmit false --isolatedModules false --esModuleInterop true',
        );

        try {
          console.log('🖼️  Copying assets...');
          execSync('cp -R src/theme/assets/images js/src/theme/assets/images');

          console.log('♻️  Replacing source...');
          execSync('rm -rf src', { stdio: 'pipe' });
          execSync('cp -R js/src ./src', { stdio: 'pipe' });
          execSync('rm -rf js', { stdio: 'pipe' });
        } catch (error) {
          console.error(
            '🚨 Failed to copy assets or replace source. If you are using windows, please use git bash.',
          );
          process.exit(1);
        }

        console.log('🌀 Removing types ...');
        execSync('rm -rf src/theme/types', { stdio: 'pipe' });
        execSync('rm -f src/navigations/paths.js', { stdio: 'pipe' });
        execSync('rm -f src/navigations/types.js', { stdio: 'pipe' });
      }

      // FIXME: This is a temporary solution to fix the eslint issue
      execSync(
        `${packageManager} add -D @typescript-eslint/eslint-plugin@${TYPESCRIPT_VERSION}`,
      );

      resolve();
    });
  },
};
