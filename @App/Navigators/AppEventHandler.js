/* eslint-disable no-unused-expressions */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { AppState, View } from 'react-native';

import AppStateActions from 'App/Stores/AppState/Actions';

const EVENT = {
  APP_STATE_CHANGED: 'change',
};

class AppEventHandler extends React.Component {
  static propTypes = {
    children: PropTypes.any.isRequired,
    handleAppStateUpdate: PropTypes.func.isRequired,
  };

  /**
   * Define default event states
   */
  constructor(props) {
    super(props);
    this.state = {
      currentState: AppState.currentState,
    };
  }

  /**
   * Register your event listeners when the app is mounted
   */
  componentDidMount() {
    const { handleAppStateUpdate } = this.props;
    handleAppStateUpdate(AppState.currentState);

    // AppState change event listener
    AppState.addEventListener(EVENT.APP_STATE_CHANGED, this.onAppStateChange);
  }

  /**
   * You must unregister listeners when your component unmount
   */
  componentWillUnmount() {
    // AppState change event listener
    AppState.removeEventListener(EVENTS.APP_STATE_CHANGED, this.onAppStateChange);
  }

  onAppStateChange = (nextAppState) => {
    __DEV__ && console.log('@onAppStateChange', nextAppState);

    // update appState when changes
    this.setState({ currentState: nextAppState }, () => {
      const { handleAppStateUpdate } = this.props;
      handleAppStateUpdate(nextAppState);
    });
  };

  render() {
    const { children } = this.props;
    const { currentState } = this.state;
    return children(currentState);
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
