const { execSync } = require('child_process');

module.exports = {
  async apply(value, previousValues) {
    return new Promise(async resolve => {
      if (!value) {
        console.log('\n');

        console.log('📦 Loading the build tool...');
        execSync('yarn add -D typescript');

        console.log('🧱 Building the javascript source...');
        execSync(
          'npx tsc --jsx react-native --module ESNext -t esnext --outDir js --noEmit false',
        );

        console.log('🖼️  Copying assets...');
        execSync('cp -R src/theme/assets js/src/theme/assets');

        console.log('♻️  Replacing source...');
        execSync('rm -rf src', { stdio: 'pipe' });
        execSync('cp -R js/src ./src', { stdio: 'pipe' });
        execSync('rm -rf js', { stdio: 'pipe' });

        console.log('💣 Removing typescript dependencies source...');
        execSync(
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
        execSync('rm -rf @types', { stdio: 'pipe' });
        execSync('rm tsconfig.json', { stdio: 'pipe' });
      }
      resolve();
    });
  },
};
