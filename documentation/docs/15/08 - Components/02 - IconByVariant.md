---
slug: /components/icon-by-variant
sidebar_label: IconByVariant
title: IconByVariant
id: icon-by-variant
keywords: [icon, variant, iconbyvariant, icon-by-variant, component]
---

The atomic `IconByVariant` component is a helper component that allows you to render different icons based on the current [variant](/docs/theming/configuration#variants) of your app. This component is particularly useful when you need to display different icon based on the variant of your app. If the icon is not found for the current variant, the component will render the default icon.

### Usage
You will need to store your icons in the `theme/assets/icons` folder. The `IconByVariant` component will try to find the icon in the `theme/assets/icons/<variant>` folder, falling back to the default icon located in the `theme/assets/icons` folder.
So if you have an icon named `language` in the `theme/assets/icons/premiums` folder, the component will try to find the icon in the `theme/assets/icons/premiums` folder, falling back to the default icon located in the `theme/assets/icons` folder.

```jsx
import { IconByVariant } from '@/components/atoms';

function Example() {
  return (
    <IconByVariant
      path={'language'} // try to find an icon named `language` for the current variant in the `theme/assets/icons/<variant>` folder, fallback to the default asset located in `theme/assets/icons` folder
    />
  );
}

```

:::info
the `path` prop can handle a path with sub folders, for example, `folder1/folder2/iconName`. The component will try to find the asset in the `theme/assets/icons/<variant>/folder1/folder2` folder, falling back to the default asset located in the `theme/assets/icons/folder1/folder2` folder.
:::

### Props

| Name       | Type   | Default | Description                                                                                   |
|------------|--------|---------|-----------------------------------------------------------------------------------------------|
| path       | string |         | The required name of the asset to be displayed. The component will try to find the asset in the `theme/assets/icons/<variant>` folder, falling back to the default asset located in the `theme/assets/icons` folder. |
| ...props   | SvgProps |  | all props from `Svg` component are supported except `source` prop.                         |

:::info
The `IconByVariant` component use the `Svg` component from [`react-native-svg` library](https://github.com/software-mansion/react-native-svg) to render the icon. You can find more information about the `Svg` component in the react-native-svg documentation.
:::