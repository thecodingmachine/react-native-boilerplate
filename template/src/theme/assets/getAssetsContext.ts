export type AssetType = 'images' | 'icons';

export default (type: AssetType) =>
  type === 'images'
    ? require.context('./images', true, /\.(png|jpg|jpeg|gif|webp)$/)
    : require.context('/icons', true, /\.svg$/);
