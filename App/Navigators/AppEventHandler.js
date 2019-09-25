/* eslint-disable no-unused-expressions */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ViewPropTypes, AppState, Keyboard, View } from 'react-native';
// import { handleUpdateAppState } from 'App/Actions/AppState';

import AppStateActions from 'App/Stores/AppState/Actions';
import StartupActions from 'App/Stores/Startup/Actions';

const EVENT = {
  APP_STATE_CHANGED: 'change',
  KEYBOARD_DID_SHOW: 'keyboardDidShow',
  KEYBOARD_DID_HIDE: 'keyboardDidHide',
};

class AppEventHandler extends React.Component {
  static propTypes = {
    style: ViewPropTypes.style,
    children: PropTypes.any.isRequired,
    handleAppStateUpdate: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      appState: AppState.currentState,
    };
  }

  componentDidMount() {
    const { handleAppStateUpdate } = this.props;
    handleAppStateUpdate({
      appState: AppState.currentState,
    });

    // AppState change event listener
    AppState.addEventListener(EVENT.APP_STATE_CHANGED, this.onAppStateChange);

    // Listen keyboard show/hide, in order to update theme and other staffs.
    Keyboard.addListener(EVENT.KEYBOARD_DID_SHOW, this.onKeyboardDidShow);
    Keyboard.addListener(EVENT.KEYBOARD_DID_HIDE, this.onKeyboardDidHide);
  }

  // You must remove listeners when your component unmount
  componentWillUnmount() {
    AppState.removeEventListener(EVENTS.APP_STATE_CHANGED, this.onAppStateChange);

    Keyboard.removeListener(EVENT.KEYBOARD_DID_SHOW, this.onKeyboardDidShow);
    Keyboard.removeListener(EVENT.KEYBOARD_DID_HIDE, this.onKeyboardDidHide);
  }

  onAppStateChange = (nextAppState) => {
    __DEV__ && console.log('onAppStateChange', nextAppState);
    // update appState when changes
    this.setState({ appState: nextAppState });

    const { handleAppStateUpdate } = this.props;
    handleAppStateUpdate({
      state: nextAppState,
    });
  };

  onKeyboardDidShow = () => {
    __DEV__ && console.log('onKeyboardDidShow');
  };

  onKeyboardDidHide = () => {
    __DEV__ && console.log('onKeyboardDidHide');
  };

  render() {
    const { children, style } = this.props;
    const { appState } = this.state;
    return <View style={style}>{children(appState)}</View>;
  }
}

export default connect(
  (state) => ({}),
  (dispatch) =>
    bindActionCreators(
      {
        handleAppStateUpdate: AppStateActions.onStateChange,
      },
      dispatch,
    ),
)(AppEventHandler);
