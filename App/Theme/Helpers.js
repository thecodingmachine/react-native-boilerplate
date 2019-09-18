import { StyleSheet } from 'react-native'
import { Colors } from 'App/Theme'

export default StyleSheet.create({
  backgroundReset: {
    backgroundColor: Colors.transparent,
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  colCenter: {
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  colCross: {
    alignItems: 'center',
    flexDirection: 'column',
  },
  colMain: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  column: {
    flexDirection: 'column',
  },
  columnReverse: {
    flexDirection: 'column-reverse',
  },
  crossCenter: {
    alignItems: 'center',
  },
  crossEnd: {
    alignItems: 'flex-end',
  },
  crossStart: {
    alignItems: 'flex-start',
  },
  crossStretch: {
    alignItems: 'stretch',
  },
  fill: {
    flex: 1,
  },
  fillCenter: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  fillCol: {
    flex: 1,
    flexDirection: 'column',
  },
  fillColCenter: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  fillColCross: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
  },
  fillColMain: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  fillColReverse: {
    flex: 1,
    flexDirection: 'column-reverse',
  },
  fillRow: {
    flex: 1,
    flexDirection: 'row',
  },
  fillRowCenter: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  fillRowCross: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
  },
  fillRowMain: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  fillRowReverse: {
    flex: 1,
    flexDirection: 'row-reverse',
  },
  fullSize: {
    height: '100%',
    width: '100%',
  },
  fullWidth: {
    width: '100%',
  },
  mainCenter: {
    justifyContent: 'center',
  },
  mainEnd: {
    justifyContent: 'flex-end',
  },
  mainSpaceAround: {
    justifyContent: 'space-around',
  },
  mainSpaceBetween: {
    justifyContent: 'space-between',
  },
  mainStart: {
    justifyContent: 'flex-start',
  },
  mirror: {
    transform: [{ scaleX: -1 }],
  },
  rotate90: {
    transform: [{ rotate: '90deg' }],
  },
  rotate90Inverse: {
    transform: [{ rotate: '-90deg' }],
  },
  row: {
    flexDirection: 'row',
  },
  rowCenter: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  rowCross: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  rowMain: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  rowReverse: {
    flexDirection: 'row-reverse',
  },
  scrollSpaceAround: {
    flexGrow: 1,
    justifyContent: 'space-around',
  },
  scrollSpaceBetween: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  selfStretch: {
    alignSelf: 'stretch',
  },
  textCenter: {
    textAlign: 'center',
  },
  textJustify: {
    textAlign: 'justify',
  },
  textLeft: {
    textAlign: 'left',
  },
  textRight: {
    textAlign: 'right',
  },
})
