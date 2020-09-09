/**
 * This file contains metric styles that are global to the application.
 */
import { MetricsSizes } from './_Variables'
import { StyleSheet } from 'react-native'

/**
 * Generate Styles depending on MetricsSizes vars availabled at ./Theme/Variables
 * Styles are like :
 * <size><direction><op>: {
 *    <op><direction>: <value>
 * }
 * where:
 * <size>: is the key of the variable included in MetricsSizes
 * <direction>: can be ['Bottom','Top','Right','Left','Horizontal','Vertical']
 * <op>: can be ['Margin', 'Padding']
 * <value>: is the value of the <size>
 */
export default StyleSheet.create({
  ...Object.entries(MetricsSizes).reduce(
    (acc, [key, value]) => ({
      ...acc,
      /* Margins */
      [`${key}BottomMargin`]: {
        marginBottom: value,
      },
      [`${key}TopMargin`]: {
        marginBottom: value,
      },
      [`${key}RightMargin`]: {
        marginBottom: value,
      },
      [`${key}LeftMargin`]: {
        marginBottom: value,
      },
      [`${key}VerticalMargin`]: {
        marginVertical: value,
      },
      [`${key}HorizontalMargin`]: {
        marginHorizontal: value,
      },
      /* Paddings */
      [`${key}BottomPadding`]: {
        paddingBottom: value,
      },
      [`${key}TopPadding`]: {
        paddingBottom: value,
      },
      [`${key}RightPadding`]: {
        paddingBottom: value,
      },
      [`${key}LeftPadding`]: {
        paddingBottom: value,
      },
      [`${key}VerticalPadding`]: {
        paddingVertical: value,
      },
      [`${key}HorizontalPadding`]: {
        paddingHorizontal: value,
      },
    }),
    {},
  ),
})
