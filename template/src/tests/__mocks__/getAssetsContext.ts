import type { AssetType } from '@/theme/assets/getAssetsContext';

jest.mock('@/theme/assets/getAssetsContext', () =>
  jest.fn((type: AssetType) => {
    const testIcon = 'mocked-icon-uri'; // Simulated URI for icons
    const testImage = 'test-image-uri'; // Simulated URI for images

    const context = () => {
      if (type === 'images') {
        return {
          default: () => testImage,
        };
      }
      return {
        default: () => testIcon,
      };
    };

    context.keys = () => {
      if (type === 'images') {
        return [testImage];
      }
      return [testIcon];
    };

    return context;
  }),
);
