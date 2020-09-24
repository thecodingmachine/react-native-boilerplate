import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { View, ActivityIndicator, Button, Text } from 'react-native'

import { Brand } from '@/Components'
import { Gutters, Layout } from '@/Theme'
import { FetchOneUserAction } from '@/Store/User/FetchOne'

const IndexExampleContainer = () => {
  const dispatch = useDispatch()

  const user = useSelector((state) => state.user.fetchOne.item)
  const userIsLoading = useSelector((state) => state.user.fetchOne.loading)
  const userError = useSelector((state) => state.user.fetchOne.error)

  const fetch = () => {
    const number = Math.floor(Math.random() / 0.1) + 1
    dispatch(FetchOneUserAction(number))
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

export default IndexExampleContainer
