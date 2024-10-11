---
slug: /components/asset-by-variant
sidebar_label: AssetByVariant
title: AssetByVariant
id: asset-by-variant
keywords: [asset, variant, assetbyvariant, asset-by-variant, component]
---

The atomic `AssetByVariant` component is a helper component that allows you to render different assets based on the current [variant](/docs/theming/configuration#variants) of your app. This component is particularly useful when you need to display different images or assets based on the variant of your app. If the asset is not found for the current variant, the component will render the default asset.

### Usage

You will need to store your assets in the `theme/assets/images` folder. The `AssetByVariant` component will try to find the asset in the `theme/assets/images/<variant>` folder, falling back to the default asset located in the `theme/assets/images` folder.
So if you have an asset named `tom` in the `theme/assets/images/premiums` folder, the component will try to find the asset in the `theme/assets/images/premiums` folder, falling back to the default asset located in the `theme/assets/images` folder.

```jsx
import { AssetByVariant } from '@/components/atoms';

function Example() {
  return (
    <AssetByVariant
      path={'tom'}
      resizeMode={'contain'}
      style={{ height: 300, width: 300 }}
    />
  );
}
```

:::info
the `path` prop can handle a path with sub folders, for example, `folder1/folder2/assetName`. The component will try to find the asset in the `theme/assets/images/<variant>/folder1/folder2` folder, falling back to the default asset located in the `theme/assets/images/folder1/folder2` folder.
:::


### Props

| Name       | Type                       | Default | Description                                                                                   |
|------------|----------------------------|---------|-----------------------------------------------------------------------------------------------|
| path       | string                     |         | The required path of the asset to be displayed. The component will try to find the asset in the `theme/assets/images/<variant>` folder, falling back to the default asset located in the `theme/assets/images` folder. |
| extension  | string                     | 'png'   | The extension of the asset to be displayed.                                                   |
| ...props   | Omit\<ImageProps, 'source'\> |         | all props from `Image` component are supported except `source` prop.                          |
