import React from 'react';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';
import { bindActionCreators } from 'redux';

import styles from './SplashScreenStyle';
import StartupActions from 'App/Stores/Startup/Actions';

class SplashScreen extends React.Component {
  componentDidMount() {
    __DEV__ && console.log('@enter SplashScreen!');
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logo}>
          {/* You will probably want to insert your logo here */}
          <Text>LOGO</Text>
        </View>
      </View>
    );
  }
}

export default connect(
  (state) => ({
    isLoading: state.appState.isLoading,
  }),
  (dispatch) => ({
    startup: () => dispatch(StartupActions.startup()),
  }),
)(SplashScreen);
