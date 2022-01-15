module.exports = {
  parserPreset: 'conventional-changelog-conventionalcommits',
  rules: {
    'body-leading-blank': [1, 'always'],
    'body-max-line-length': [2, 'always', 100],
    'footer-leading-blank': [1, 'always'],
    'footer-max-line-length': [2, 'always', 100],
    'header-max-length': [2, 'always', 100],
    'subject-case': [
      2,
      'never',
      ['sentence-case', 'start-case', 'pascal-case', 'upper-case'],
    ],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never'],
    'type-enum': [
      2,
      'always',
      [
        '✨',
        '🐛',
        '📚',
        '💎',
        '♻️',
        '🐙',
      ],
    ],
  },
  prompt: {
    questions: {
      type: {
        description: "Select the TYPE of change that you're committing",
        enum: {
          '✨': {
            description: 'A new feature',
            title: 'Features',
            emoji: '✨',
          },
          '🐛': {
            description: 'A bug fix',
            title: 'Bug Fixes',
            emoji: '🐛',
          },
          '📚': {
            description: 'Documentation only changes',
            title: 'Documentation',
            emoji: '📚',
          },
          '💎': {
            description:
              'Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)',
            title: 'Code Styles',
            emoji: '💎',
          },
          '♻️': {
            description:
              'A code change that neither fixes a bug nor adds a feature',
            title: 'Code Refactoring',
            emoji: '♻️',
          },
          '🐙': {
            description: 'Changes to the git configuration files and scripts (example scope: GitHub Actions)',
            title: 'Github configuration',
            emoji: '🐙',
          },
        },
      },
      scope: {
        description:
          'What is the SCOPE of this change (e.g. component or file name)',
      },
      subject: {
        description:
          'Write a short, imperative tense DESCRIPTION of the change',
      },
      body: {
        description: 'Provide a longer description of the change',
      },
      isBreaking: {
        description: 'Are there any breaking changes?',
      },
      breakingBody: {
        description:
          'A BREAKING CHANGE commit requires a body. Please enter a longer description of the commit itself',
      },
      breaking: {
        description: 'Describe the breaking changes',
      },
      isIssueAffected: {
        description: 'Does this change affect any open issues?',
      },
      issuesBody: {
        description:
          'If issues are closed, the commit requires a body. Please enter a longer description of the commit itself',
      },
      issues: {
        description: 'Add issue references (e.g. "fix #123", "re #123".)',
      },
    },
  },
};
