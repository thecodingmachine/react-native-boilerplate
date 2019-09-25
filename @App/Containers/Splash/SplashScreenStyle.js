import { StyleSheet } from 'react-native';
import Colors from 'App/Theme/Colors';
import Styles from 'App/Theme/Styles';

export default StyleSheet.create({
  container: {
    ...Styles.screen.container,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary,
  },
  logo: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 70,
    width: 70,
    backgroundColor: 'white',
  },
});
