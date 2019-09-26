import React from 'react';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';

import styles from './RootScreenStyle';
import StartupActions from 'App/Stores/Startup/Actions';

class RootScreen extends React.Component {
  componentDidMount() {
    __DEV__ && console.log('@Enter RootScreen!');
    // Run the startup saga when the application is starting
    this.props.startup();
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
)(RootScreen);
