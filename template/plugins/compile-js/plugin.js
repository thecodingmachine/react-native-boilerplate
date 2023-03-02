const { execSync } = require('child_process');

module.exports = {
  async apply(value, previousValues) {
    return new Promise(async resolve => {
      if (!value) {
        console.log('\n');

        console.log('📦 Loading the build tool...');
        await execSync('yarn add -D typescript', { stdio: 'pipe' });

        console.log('🧱 Building the javascript source...');
        await execSync(
          'npx tsc --jsx react-native --module ESNext -t esnext --outDir js --noEmit false',
          { stdio: 'pipe' },
        );

        console.log('🖼️  Copying assets...');
        await execSync('cp -R src/theme/assets js/src/theme/assets', {
          stdio: 'pipe',
        });

        console.log('♻️  Replacing source...');
        await execSync('rm -rf src', { stdio: 'pipe' });
        await execSync('cp -R js/src ./src', { stdio: 'pipe' });
        await execSync('rm -rf js', { stdio: 'pipe' });

        console.log('💣 Removing typescript dependencies source...');
        await execSync(
          'yarn remove ' +
            '@tsconfig/react-native ' +
            '@types/jest ' +
            '@types/node ' +
            '@types/react ' +
            '@types/react-test-renderer ' +
            'typescript',
          { stdio: 'pipe' },
        );

        console.log('🌀 Removing types ...');
        await execSync('rm -rf @types', { stdio: 'pipe' });
        await execSync('rm tsconfig.json', { stdio: 'pipe' });
      }
      resolve();
    });
  },
};
