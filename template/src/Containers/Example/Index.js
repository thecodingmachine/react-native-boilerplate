import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { View, ActivityIndicator, Text, TextInput } from 'react-native'

import { Brand } from '@/Components'
import { Common, Fonts, Gutters, Layout } from '@/Theme'
import { FetchOneUserAction } from '@/Store/User/FetchOne'

const IndexExampleContainer = () => {
  const dispatch = useDispatch()

  const user = useSelector((state) => state.user.fetchOne.item)
  const userIsLoading = useSelector((state) => state.user.fetchOne.loading)
  const userError = useSelector((state) => state.user.fetchOne.error)

  const [userId, setUserId] = useState('1')

  const fetch = useCallback(() => {
    dispatch(FetchOneUserAction(userId))
  }, [dispatch, userId])

  useEffect(() => {
    fetch()
  }, [fetch])

  return (
    <View style={[Layout.fill, Layout.colCenter, Gutters.smallHPadding]}>
      <View style={[]}>
        <Brand />
        {userIsLoading && <ActivityIndicator />}
        {userError && <Text>{userError}</Text>}
        {user && (
          <Text>
            {"I'm a fake user, my name is "}
            {user.name}
          </Text>
        )}
      </View>
      <View style={[Layout.row, Layout.rowHCenter]}>
        <Text style={[Layout.fill, Fonts.textCenter]}>User ID</Text>
        <TextInput
          onChangeText={(text) => setUserId(text)}
          editable={!userIsLoading}
          keyboardType={'number-pad'}
          maxLength={1}
          value={userId}
          selectTextOnFocus
          style={[Layout.fill, Common.textInput, Layout.fill]}
        />
      </View>
    </View>
  )
}

export default IndexExampleContainer
