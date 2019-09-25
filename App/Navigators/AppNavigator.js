import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import { LoadingIndicator } from 'ublocks-react-native';
import { Actions, Router, Reducer } from 'react-native-router-flux';

import AppEventHandler from './AppEventHandler';
import AppScenes from './AppScenes';

class AppNavigator extends React.Component {
  static propTypes = {
    isLoading: PropTypes.bool.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      scenes: Actions.create(AppScenes()),
    };

    console.log(this.props.isLoading);
  }

  onStateChange = (data) => {
    __DEV__ && console.log('onStateChange data=>', data);
  };

  reducerCreate = (params) => {
    const defaultReducer = new Reducer(params);
    return (state, action) => {
      // console.log('state, action=>', state, action);
      this.props.dispatch(action);
      return defaultReducer(state, action);
    };
  };

  render() {
    const { isLoading } = this.props;
    const { scenes } = this.state;
    return (
      <AppEventHandler style={{ flex: 1 }}>
        {(appState) => (
          <React.Fragment>
            {scenes && (
              <Router
                appState={appState}
                // sceneKey={sceneKey}
                scenes={scenes}
                // backAndroidHandler={this.backAndroidHandler}
                onExitApp={() => true}
                // onStateChange={this.onStateChange}
                createReducer={this.reducerCreate}
                sceneStyle={{
                  flex: 1,
                  backgroundColor: 'transparent',
                  shadowColor: null,
                  shadowOffset: null,
                  shadowOpacity: null,
                  shadowRadius: null,
                }}
              />
            )}
            {/* <LoadingIndicator open={isLoading} /> */}
          </React.Fragment>
        )}
      </AppEventHandler>
    );
  }
}

export default connect(
  (state) => ({
    isLoading: state.appState.isLoading,
    userIsLoading: state.example.userIsLoading,
  }),
  (dispatch) => bindActionCreators({ dispatch }, dispatch),
)(AppNavigator);
