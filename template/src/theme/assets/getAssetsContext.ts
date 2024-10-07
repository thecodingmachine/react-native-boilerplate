export type AssetType = 'images' | 'icons';

export default (type: AssetType) =>
  type === 'images'
    ? require.context('./images', true, /\.png$/)
    : require.context('/icons', true, /\.svg$/);
