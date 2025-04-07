/* eslint-disable unicorn/prefer-module */
export type AssetType = 'icons' | 'images';

const getAssetsContext = (type: AssetType) =>
  type === 'images'
    ? require.context('./images', true, /\.(png|jpg|jpeg|gif|webp)$/)
    : require.context('/icons', true, /\.svg$/);

export default getAssetsContext;
