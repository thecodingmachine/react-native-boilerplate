import React from 'react';
import { Platform, Text, View, Button, ActivityIndicator, Image } from 'react-native';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import ExampleActions from 'App/Stores/Example/Actions';
import { liveInEurope } from 'App/Stores/Example/Selectors';
import Style from './ExampleScreenStyle';
import { Images } from 'App/Theme';
import { translate as t } from 'App/Helpers/I18n';

/**
 * This is an example of a container component.
 *
 * This screen displays a little help message and informations about a fake user.
 * Feel free to remove it.
 */

const instructions = Platform.select({
  ios: t('instructions_ios'),
  // 'Press Cmd+R to reload,\nCmd+D or shake for dev menu.',
  android: t('instructions_android'),
  // 'Double tap R on your keyboard to reload,\nShake or press menu button for dev menu.',
});

class ExampleScreen extends React.Component {
  componentDidMount() {
    this._fetchUser();
  }

  render() {
    return (
      <View style={Style.container}>
        {this.props.userIsLoading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <View>
            <View style={Style.logoContainer}>
              <Image style={Style.logo} source={Images.logo} resizeMode={'contain'} />
            </View>
            <Text style={Style.text}>{t('title')}</Text>
            <Text style={Style.instructions}>{instructions}</Text>
            {this.props.userErrorMessage ? (
              <Text style={Style.error}>{this.props.userErrorMessage}</Text>
            ) : (
              <View>
                <Text style={Style.result}>
                  {t('username')
                  // "I'm a fake user, my name is "
                  }
                  {this.props.user.name}
                </Text>
                <Text style={Style.result}>
                  {this.props.liveInEurope
                    ? t('live_in_eu') //'I live in Europe !'
                    : t('not_live_in_eu') // "I don't live in Europe."
                  }
                </Text>
              </View>
            )}
            <Button onPress={() => this._fetchUser()} title={t('refresh')} />
          </View>
        )}
      </View>
    );
  }

  _fetchUser() {
    this.props.fetchUser();
  }
}

ExampleScreen.propTypes = {
  user: PropTypes.object,
  userIsLoading: PropTypes.bool,
  userErrorMessage: PropTypes.string,
  fetchUser: PropTypes.func,
  liveInEurope: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  user: state.example.user,
  userIsLoading: state.example.userIsLoading,
  userErrorMessage: state.example.userErrorMessage,
  liveInEurope: liveInEurope(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchUser: () => dispatch(ExampleActions.fetchUser()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ExampleScreen);
