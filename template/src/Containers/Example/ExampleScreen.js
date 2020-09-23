import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { View, ActivityIndicator, Button, Text } from 'react-native'
import { Brand } from '@/Components'
import { Gutters, Layout } from '@/Theme'
import { fetchUser } from '@/Store/Example/Actions'

const ExampleScreen = () => {
  const dispatch = useDispatch()

  const user = useSelector((state) => state.example.user)
  const userIsLoading = useSelector((state) => state.example.userLoading)
  const userError = useSelector((state) => state.example.userError)

  const fetch = () => {
    const number = Math.floor(Math.random() / 0.1) + 1
    dispatch(fetchUser(number))
  }

  return (
    <View style={[Layout.fill, Layout.rowCenter]}>
      <View style={[Layout.colCenter, Gutters.smallHPadding]}>
        <Brand />
        {userIsLoading && <ActivityIndicator />}
        {userError && <Text>{userError}</Text>}
        {user && (
          <Text>
            {"I'm a fake user, my name is "}
            {user.name}
          </Text>
        )}
        <Button onPress={fetch} title="Fetch" />
      </View>
    </View>
  )
}

export default ExampleScreen
