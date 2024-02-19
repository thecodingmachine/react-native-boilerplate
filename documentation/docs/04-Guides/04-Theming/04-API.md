---
slug: /theming/api-reference
sidebar_label: API Reference
title: API Reference
id: theming-api-reference
keywords: [theme, theming, configuration, config, api, reference, api reference]
---

## Theme Configuration

### ColorConfig

| Key      | Type                   | Description          |
|----------|------------------------|----------------------|
| `colors` | Record<string, string> | Define global colors |

### FontConfig

| Key      | Type                   | Description                                     |
|----------|------------------------|-------------------------------------------------|
| `sizes`  | number[]               | Define font sizes to generate associated style  |
| `colors` | Record<string, string> | Define font colors to generate associated style |

### GuttersConfig

| Key   | Type     | Description                                                      |
|-------|----------|------------------------------------------------------------------|
| sizes | number[] | Define sizes to generate associated styles (padding and margin)  |


### BordersConfig

| Key      | Type                   | Description                                                |
|----------|------------------------|------------------------------------------------------------|
| `widths` | number[]               | Define sizes to generate associated styles (borderWidth)   |
| `radius` | number[]               | Define radius to generate associated styles (borderRadius) |
| `colors` | Record<string, string> | Define colors to generate associated styles (borderColor)  |

### NavigationColorsConfig

| Key            | Type   |
|----------------|--------|
| `primary`      | string |
| `background`   | string |
| `card`         | string |
| `text`         | string |
| `border`       | string |
| `notification` | string |

### VariantsConfig

| Key              | Type                            |
|------------------|---------------------------------|
| fonts            | `Pick<FontConfig, 'colors'>`    |
| backgrounds      | `Record<string, string>`        |
| borders          | `Pick<BordersConfig, 'colors'>` |
| navigationColors | `NavigationColorsConfig`        |

## Theme Types

### Theme

| Key             | Type                                                             |
|-----------------|------------------------------------------------------------------|
| colors          | all possible colors used through the configuration               |
| variant         | `default` or `string`                                            |
| layout          | [`Layout`](/docs/theming/api-reference#layout)                   |
| gutters         | [`Gutters`](/docs/theming/api-reference#gutters)                 |
| fonts           | [`Fonts`](/docs/theming/api-reference#fonts)                     |
| backgrounds     | [`Backgrounds`](/docs/theming/api-reference#backgrounds)         |
| borders         | [`Borders`](/docs/theming/api-reference#borders)                 |
| navigationTheme | [`NavigationTheme`](/docs/theming/api-reference#navigationTheme) |
| components      | [`Components`](/docs/theming/api-reference#components)           |

### Layout

Static layout styles generated from the `static/layout.ts` file.
The type of the generated styles is `Record<string, ViewStyle>` but will be inferred by the `Layout` type.

### Gutters

Generated styles provided by the `gutters` section of the theme configuration assist in applying padding and margin to your components.
The type of the generated styles is `Record<string, ViewStyle>` but will be inferred by the `Gutters` type.

### Fonts

Combination of static and Generated styles provided by the `fonts` section of the theme configuration assist in applying font size and color to your components.
The type of the generated styles is `Record<string, TextStyle>` but will be inferred by the `Fonts` type.

### Backgrounds
Generated styles provided by the `backgrounds` section of the theme configuration assist in applying background color to your components.
The type of the generated styles is `Record<`bg_${string}`, {backGroundColor: string}>` but will be inferred by the `Backgrounds` type.

### Borders
Generated styles provided by the `borders` section of the theme configuration assist in applying border radius, width and color to your components.
The type of the generated styles is `Record<string, ViewStyle>` but will be inferred by the `Borders` type.

### NavigationTheme
Generated styles provided by the `navigationColors` section of the theme configuration assist in overriding ReactNavigation theme colors.

### Components
Generated styles provided by the `components` file of the theme configuration assist in applying styles to specific components.

