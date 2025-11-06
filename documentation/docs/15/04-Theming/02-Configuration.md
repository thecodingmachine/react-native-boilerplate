---
slug: /theming/configuration
sidebar_label: Configuration
title: Configuration
id: theme-configuration
keywords: [theme, theming, configuration, config, colors, fonts, gutters, spacings, borders, navigation, variants]
---

## Structure

The idea behind the theme configuration is to have a single source of truth for all the theme related values.
This is why the theme configuration is a simple object with the following structure:

| Key                | Type                                                                           | Description                                                                                                  |
|--------------------|--------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------|
| `colors`           | [`colorConfig`](/docs/theming/api-reference#colorconfig)                       | Define global colors                                                                                         |
| `fonts`            | [`FontConfig`](/docs/theming/api-reference#fontconfig)                         | Define colors and sizes to generate associated styles (`color` and `fontSize`)                               |
| `gutters`          | [`GuttersConfig`](/docs/theming/api-reference#guttersconfig)                   | Define sizes to generate associated styles (`padding` and `margin`)                                          |
| `backgrounds`      | `Record<string, string>`                                                       | Define colors generate associated styles (`backgroundColor`)                                                 |
| `borders`          | [`BordersConfig`](/docs/theming/api-reference#bordersconfig)                   | Define colors, sizes and radius to generate associated styles (`borderColor`, `borderRadius`, `borderWidth`) |
| `navigationColors` | [`NavigationColorsConfig`](/docs/theming/api-reference#navigationcolorsconfig) | Define colors override ReactNavigation theme colors                                                          |
| `variants`         | [`VariantsConfig`](/docs/theming/api-reference#variantsconfig)                 | Define a new theme based on the previous values                                                              |

## Variants
A variant is a new theme based on the previous values.
It means that the `default` theme is based on the previous keys (fonts, gutters, backgrounds, borders, navigationColors) 
to be generated and variant are just a way to create a new theme based on the previous values.

For example, if you want to create a `dark` theme, you can create a new variant based on the `default` theme and override the colors you want to change.

```ts title=/src/theme/theme.config.ts
export const config = {
  //...
  // highlight-start
  backgrounds: {
    gray_200: '#DFDFDF',
  }, 
  // highlight-end
  //...
  variants: {
    dark: {
      // highlight-start
      backgrounds: {
        gray_200: '#000000',
      },
      // highlight-end
    },
  },
};
```

So here the theme `dark` will have the same values as the `default` theme except for the `backgrounds.gray_200` value.

## Statically generated styles
Some styles, including Backgrounds, Borders, Fonts and Gutters need to be dynamically generated depending on the actual theme.
But, in some cases, the configuration is not sufficient to generate all the styles you need. So, in this case, you will need to add some static styles.
In each style files you will find a `static` function to include non-config-based styles:
- `staticBackgroundStyles` to generate static background styles
- `staticBorderStyles` to generate static border styles
- `staticFontStyles` to generate static font styles
- `staticGutterStyles` to generate static gutter styles

into these files, you will be able to add any style you want.
All of these will be available

## Components styling
Sometimes, you will want to create some style object for a specific component.
As we want to keep the theme configuration as the single source of truth, we don't want to have some style object in the component itself.
Plus, we want to be able to use the theme configuration variables to generate these styles for example if we want to style a button based on the theme colors.

This is why we introduce the `components` file in the theme directory.
The benefit of this is that you will be able to create a style object for a specific component and use the theme styles to generate these styles.

For example, if you want to style a circle `Button` component, you will create a `circleButton` entry in the `components` file.

```ts title=/src/theme/components.ts
export default ({ layout, backgrounds, fonts }: ComponentTheme) => {
  return {
    buttonCircle: {
      ...layout.justifyCenter,
      ...layout.itemsCenter,
      ...backgrounds.purple100,
      ...fonts.gray400,
      height: 70,
      width: 70,
      borderRadius: 35,
    },
  } as const satisfies Record<string, ImageStyle | TextStyle | ViewStyle>;
};
```



