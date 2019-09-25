const config = require('react-native-config') || {};
const sonarScanner = require('sonarqube-scanner');

// console.log('config=>', config);
const serverUrl = config.SONARQUBE_URL || 'http://localhost:9000';

sonarScanner({
  serverUrl,
  options: {
    'sonar.sources': '.',
    'sonar.inclusions': 'src/**', // Entry point of your code
    // 'sonar.tests': 'tests',
    'sonar.javascript.lcov.reportPaths': 'coverage/lcov.info',
  },
}, () => {});
