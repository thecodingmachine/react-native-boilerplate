/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
	presets: ['module:@react-native/babel-preset'],
	plugins: [
		[
			'module-resolver',
			{
				root: ['./src'],
				extensions: ['.js', '.json'],
				alias: {
					'@': './src',
				},
			},
		],
		'inline-dotenv',
		'react-native-reanimated/plugin', // needs to be last
	],
};
