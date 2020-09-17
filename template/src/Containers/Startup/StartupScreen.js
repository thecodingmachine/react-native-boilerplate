import React from 'react'
import { Button, SafeAreaView } from 'react-native'
import { Layout } from '@/Theme'

const StartupScreen = ({ navigation }) => (
  <SafeAreaView style={[Layout.fill, Layout.rowCenter]}>
    <Button title={'Continue'} onPress={() => navigation.navigate('Home')} />
  </SafeAreaView>
)

export default StartupScreen
