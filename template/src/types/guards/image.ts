import { ImageSourcePropType } from 'react-native/Libraries/Image/Image';

export const isImageSourcePropType = (
	value: unknown,
): value is ImageSourcePropType => {
	return !!(
		typeof value === 'number' ||
		(typeof value === 'object' &&
			value &&
			(('testUri' in value && typeof value.testUri === 'string') ||
				('uri' in value && typeof value.uri === 'string')))
	);
};
