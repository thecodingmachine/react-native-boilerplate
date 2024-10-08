import type { AssetType } from '@/theme/assets/getAssetsContext';

jest.mock('@/theme/assets/getAssetsContext', () =>
  jest.fn((type: AssetType) => {
    const context = (key: string) => {
      if (type === 'images') {
        return jest.mock('@/theme/assets/images/tom.png');
      }
      if (type === 'icons') {
        return jest.mock('@/theme/assets/images/tom.svg');
      }
      return key;
    };

    context.keys = () => {
      if (type === 'images') {
        return ['images/tom.png'];
      }
      if (type === 'icons') {
        return ['images/tom.png'];
      }
      return [];
    };

    return context;
  }),
);