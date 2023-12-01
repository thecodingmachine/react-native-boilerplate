---
slug: /theming/how-to-use
sidebar_label: How to use it?
title: How to use it?
id: theming-how-to-use
keywords: [theme, theming, useTheme, hooks, themeProvider]
---

The boilerplate provides a pre-configured theme ready for use. 
To make use of it, simply follow this section's instructions. 
If you'd like to gain a deeper understanding of the theme configuration, please refer to 
the [configuration](/docs/theming/configuration) section for more details.

## `useTheme` hook

If you need to access the style classes, you can use the `useTheme` hook in the following manner:

```tsx
import { useTheme } from '@/theme';

const Example = () => {
    const {
      //highlight-start
      colors,
      variant,
      layout,
      gutters,
      fonts,
      backgrounds,
      borders,
      navigationTheme,
      components,
      //highlight-end
    } = useTheme();
    
    return (
        <View
            style={[
                //highlight-start
                layout.itemsCenter,
                layout.justifyCenter,
                //highlight-end
            ]}
        >
            <Brand />
            {isError && (
                <Text style={[
                    //highlight-start
                    gutters.marginTop_30, 
                    fonts.font_16, 
                    fonts.text_red_500
                    //highlight-end
                ]}>
                    An error occured
                </Text>
            )}
        </View>
    )
}
```

## Change theme

As mentioned in the [configuration](/docs/theming/configuration) section, you have the flexibility to add new themes 
(variants) and switch between them directly within the app. For example, if you have a `default` theme configured with a
`dark` variant, you can switch the current theme to `dark` at any point.

To achieve this, you can employ the `useTheme` hook as follows:

```tsx
import { useTheme } from '@/theme';

const Example = () => {
    const { changeTheme } = useTheme();
    
    return (
        <Button
            title="Change theme"
            onPress={() => changeTheme('dark')}
        />
    )
}
```

:::tip
If you require assistance in defining a new theme variant, kindly consult the [configuration](/docs/theming/configuration#variants) section for guidance.
:::

## Theme Provider

The magic of `useTheme` is made possible by our ThemeProvider component.
This main component handles the generation of all the styles in your application. 
As we've emphasized, a clean separation of concerns is paramount to us.

That's why we've designed a single, transparent component, using the adapted [context pattern](https://react.dev/learn/passing-data-deeply-with-context)
that takes care of generating all your styles, storing the theme variant, 
and even offers you the flexibility to switch the theme for your entire app. 
No black box magic here – you have full visibility into the code and the 
freedom to enhance it as needed to meet your unique requirements.
