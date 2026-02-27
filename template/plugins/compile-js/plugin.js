/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable no-console */
const { execSync, spawnSync } = require('node:child_process');
const fs = require('node:fs');         // ← tambah di bagian atas
const path = require('node:path');     // ← tambah di bagian atas

const TYPESCRIPT_VERSION = '5.6.3';

function isYarnAvailable() {
  try {
    return !!(
      execSync('yarn --version', {
        stdio: [0, 'pipe', 'ignore'],
        shell: true, // ← tambahkan ini
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
        shell: true, // ← tambahkan ini
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
          { stdio: 'inherit', shell: true }, // ← tambahkan shell: true
        );
        if (installTypeScriptCmd.error) {
          console.error(installTypeScriptCmd.error);
          process.exit(1);
        }

        console.log('🧱 Building the javascript source...');
        const transpileCmd = spawnSync(
          'npx',
          ['tsc', '--project', `plugins/compile-js/tsconfig.build.json`],
          { stdio: 'inherit', shell: true }, // ← tambahkan shell: true
        );
        if (transpileCmd.error) {
          console.error(transpileCmd.error);
          process.exit(1);
        }

        try {
          console.log('🖼️  Copying assets...');
          fs.cpSync(
            path.join('src', 'theme', 'assets', 'images'),
            path.join('js', 'src', 'theme', 'assets', 'images'),
            { recursive: true }
          );
          console.log('♻️  Replacing source...');
          fs.rmSync('src', { recursive: true, force: true });
          fs.cpSync(path.join('js', 'src'), 'src', { recursive: true });
          fs.rmSync('js', { recursive: true, force: true });
        } catch {
          console.error(
            '🚨 Failed to copy assets or replace source.',
          );
          process.exit(1);
        }
        console.log('🌀 Removing types ...');
        fs.rmSync(path.join('src', 'theme', 'types'), { recursive: true, force: true });
        fs.rmSync(path.join('src', 'navigation', 'paths.js'), { force: true });
        fs.rmSync(path.join('src', 'navigation', 'types.js'), { force: true });
      }

      resolve();
    });
  },
};
