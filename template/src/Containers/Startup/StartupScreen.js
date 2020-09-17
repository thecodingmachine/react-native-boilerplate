import React, { useEffect } from 'react'
import { Button, SafeAreaView } from 'react-native'
import { Layout } from '@/Theme'
import { useSelector } from 'react-redux'

const StartupScreen = ({ navigation }) => {
  const isReady = useSelector((state) => state.startup.appIsReady)

  useEffect(() => {
    console.log('hein', isReady)
  })

  return (
    <SafeAreaView style={[Layout.fill, Layout.rowCenter]}>
      <Button title={'Continue'} onPress={() => navigation.navigate('Home')} />
    </SafeAreaView>
  )
}

export default StartupScreen
