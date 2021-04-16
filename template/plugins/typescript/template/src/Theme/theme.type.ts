import { ImageStyle, TextStyle, ViewStyle } from 'react-native'

export type StyleType = TextStyle & ViewStyle & ImageStyle

export type ThemeColors = { [key: string]: string }
export type ThemeNavigationTheme = {
  dark: boolean
  colors: ThemeNavigationColors
}
export type ThemeNavigationColors = {
  primary: string
  background: string
  card: string
  text: string
  border: string
  notification: string
}
export type ThemeFontSize = { [key: string]: number }
export type ThemeMetricsSizes = { [key: string]: number | string }

export type ThemeVariables = {
  Colors: ThemeColors
  NavigationColors: ThemeNavigationColors
  FontSize: ThemeFontSize
  MetricsSizes: ThemeMetricsSizes
}

export type ThemeFonts = { [key: string]: TextStyle }
export type ThemeLayout = { [key: string]: StyleType }
export type ThemeGutters = { [key: string]: StyleType }
export type ThemeCommon = {
  [key: string]: StyleType
  button: { [key: string]: StyleType }
}
export type ThemeImages = { [key: string]: any }

export type Theme = {
  Colors: ThemeColors
  NavigationColors: ThemeNavigationColors
  FontSize: ThemeFontSize
  MetricsSizes: ThemeMetricsSizes
  Fonts: ThemeFonts
  Images: ThemeImages
  Layout: ThemeLayout
  Gutters: ThemeGutters
  Common: ThemeCommon
  Variables?: Partial<ThemeVariables>
}
export interface ThemeCommonParams {
  Colors: ThemeColors
  NavigationColors: ThemeNavigationColors
  FontSize: ThemeFontSize
  MetricsSizes: ThemeMetricsSizes
  Fonts: ThemeFonts
  Images: ThemeImages
  Layout: ThemeLayout
  Gutters: ThemeGutters
  Variables?: Partial<ThemeVariables>
}
