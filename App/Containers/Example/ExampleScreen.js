import React, { useEffect } from 'react'
import { Platform, Text, View, Button, ActivityIndicator, Image } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import ExampleActions from 'App/Stores/Example/Actions'
import { liveInEurope } from 'App/Stores/Example/Selectors'
import Style from './ExampleScreenStyle'
import { ApplicationStyles, Helpers, Images, Metrics } from 'App/Theme'

/**
 * This is an example of a container component.
 *
 * This screen displays a little help message and informations about a fake user.
 * Feel free to remove it.
 */
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\nCmd+D or shake for dev menu.',
  android: 'Double tap R on your keyboard to reload,\nShake or press menu button for dev menu.',
})

const ExampleScreen = () => {
  const dispatch = useDispatch()

  const user = useSelector((state) => state.example.user)
  const userIsLoading = useSelector((state) => state.example.userIsLoading)
  const userErrorMessage = useSelector((state) => state.example.userErrorMessage)

  useEffect(() => {
    dispatch(ExampleActions.fetchUser())
  }, [])

  return (
    <View
      style={[
        Helpers.fillCenter,
        Helpers.rowMain,
        Metrics.mediumHorizontalMargin,
        Metrics.mediumVerticalMargin,
      ]}
    >
      {userIsLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <View>
          <View style={Style.logoContainer}>
            <Image style={Helpers.fullSize} source={Images.logo} resizeMode={'contain'} />
          </View>
          <Text style={Style.text}>To get started, edit App.js</Text>
          <Text style={Style.instructions}>{instructions}</Text>
          {userErrorMessage ? (
            <Text style={Style.error}>{userErrorMessage}</Text>
          ) : (
            <View>
              <Text style={Style.result}>
                {"I'm a fake user, my name is "}
                {user.name}
              </Text>
              <Text style={Style.result}>
                {liveInEurope ? 'I live in Europe !' : "I don't live in Europe."}
              </Text>
            </View>
          )}
          <Button
            style={ApplicationStyles.button}
            onPress={() => dispatch(ExampleActions.fetchUser())}
            title="Refresh"
          />
        </View>
      )}
    </View>
  )
}

export default ExampleScreen
