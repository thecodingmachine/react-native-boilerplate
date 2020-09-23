import React from 'react'
import { View, Image } from 'react-native'
import { Layout, Images } from '@/Theme'

const Brand = ({ height = 200, width = 200, mode = 'contain' }) => (
  <View style={{ height, width }}>
    <Image style={Layout.fullSize} source={Images.logo} resizeMode={mode} />
  </View>
)

export default Brand
