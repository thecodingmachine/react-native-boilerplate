import { useColorScheme } from 'react-native'
import { useSelector } from 'react-redux'
import { DarkTheme, DefaultTheme } from '@react-navigation/native'
import Fonts from '@/Theme/Fonts'
import Gutters from '@/Theme/Gutters'
import Images from '@/Theme/Images'
import Layout from '@/Theme/Layout'
import Common from '@/Theme/Common'
import * as DefaultVariables from '@/Theme/Variables'
import themes from '@/Theme/themes'
import { ThemeState } from '@/Store/Theme'
import {
  Theme,
  ThemeCommon,
  ThemeNavigationColors,
  ThemeNavigationTheme,
  ThemeVariables,
} from '@/Theme/theme.type'

export default function () {
  // Get the scheme device
  const colorScheme = useColorScheme()

  // Get current theme from the store
  const currentTheme = useSelector(
    (state: { theme: ThemeState }) => state.theme.theme || 'default',
  )
  const isDark = useSelector(
    (state: { theme: ThemeState }) => state.theme.darkMode,
  )
  const darkMode = isDark === null ? colorScheme === 'dark' : isDark
  //Select the right theme light theme ({} if not exist)
  const {
    Variables: themeConfigVars = {} as Partial<ThemeVariables>,
    ...themeConfig
  } = themes[currentTheme] || {}

  const {
    Variables: darkThemeConfigVars = {} as Partial<ThemeVariables>,
    ...darkThemeConfig
  } = darkMode ? themes[`${currentTheme}_dark`] || {} : {}

  const themeVariables: ThemeVariables = mergeVariables(
    DefaultVariables as ThemeVariables,
    themeConfigVars,
    darkThemeConfigVars,
  )

  // Build the default theme
  const baseTheme: Theme = {
    Fonts: Fonts(themeVariables),
    Gutters: Gutters(themeVariables),
    Images: Images(themeVariables),
    Layout: Layout(themeVariables),
    Common: Common({
      ...themeVariables,
      Layout: Layout(themeVariables),
      Gutters: Gutters(themeVariables),
      Fonts: Fonts(themeVariables),
      Images: Images(themeVariables),
    }) as ThemeCommon,
    ...themeVariables,
  }

  // Merge and return the current Theme
  return buildTheme(
    darkMode,
    baseTheme,
    formatTheme(themeVariables, themeConfig || {}),
    formatTheme(themeVariables, darkThemeConfig || {}),
  )
}

/**
 * Generate Theme with theme variables
 *
 * @param variables
 * @param theme
 * @return {{}|{[p: string]: *}}
 */
const formatTheme = (
  variables: ThemeVariables,
  theme: Partial<Theme>,
): Partial<Theme> => {
  return Object.entries(theme).reduce((acc, [name, generate]) => {
    return {
      ...acc,
      [name]: (generate as any)(variables),
    }
  }, {})
}

/**
 * Merge all variables for building the theme
 * baseTheme <- currentTheme <- currentDarkTheme
 *
 * @param variables : {MetricsSizes?: {small: number, large: number, tiny: number, regular: number}, NavigationColors?: {primary: string}, FontSize?: {small: number, large: number, regular: number}, Colors?: {white: string, success: string, text: string, error: string, transparent: string, primary: string}} variables from @Theme/Variables
 * @param themeConfig : currentTheme form @Theme/themes
 * @param darkThemeConfig : currentDarkTheme from @Theme/themes
 * @return {{}|{[p: string]: *}}
 */
const mergeVariables = (
  variables: ThemeVariables,
  themeConfig: Partial<ThemeVariables>,
  darkThemeConfig: Partial<ThemeVariables>,
): ThemeVariables =>
  Object.entries(variables).reduce((acc, [group, vars]) => {
    return {
      ...acc,
      [group]: {
        ...vars,
        ...((themeConfig as any)[group] || {}),
        ...((darkThemeConfig as any)[group] || {}),
      },
    }
  }, {} as ThemeVariables)

/**
 * Provide all the theme exposed with useTheme()
 *
 * @param darkMode : boolean
 * @param baseTheme
 * @param themeConfig
 * @param darkThemeConfig
 * @return {{[p: string]: *, NavigationTheme: {colors}, darkMode: *}}
 */
const buildTheme = (
  darkMode: boolean,
  baseTheme: Theme,
  themeConfig: Partial<Theme>,
  darkThemeConfig: Partial<Theme>,
) => {
  return {
    ...mergeTheme(baseTheme, themeConfig, darkThemeConfig),
    darkMode,
    NavigationTheme: mergeNavigationTheme(
      darkMode ? DarkTheme : DefaultTheme,
      baseTheme.NavigationColors,
    ),
  }
}

/**
 * Merge theme from baseTheme <- currentTheme <- currentDarkTheme
 *
 * @param baseTheme
 * @param theme
 * @param darkTheme
 * @return {{[p: string]: *}}
 */
const mergeTheme = (
  baseTheme: Theme,
  theme: Partial<Theme>,
  darkTheme: Partial<Theme>,
): Theme =>
  Object.entries(baseTheme).reduce(
    (acc, [key, value]) => ({
      ...acc,
      [key]: {
        ...value,
        ...((theme as any)[key] || {}),
        ...((darkTheme as any)[key] || {}),
      },
    }),
    {} as Theme,
  )
/**
 * Merge the React Navigation Theme
 *
 * @param reactNavigationTheme
 * @param overrideColors
 * @return {{colors}}
 */
const mergeNavigationTheme = (
  reactNavigationTheme: ThemeNavigationTheme,
  overrideColors: ThemeNavigationColors,
) => ({
  ...reactNavigationTheme,
  colors: {
    ...reactNavigationTheme.colors,
    ...overrideColors,
  },
})
