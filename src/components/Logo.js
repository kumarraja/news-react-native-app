/* eslint-disable prettier/prettier */
import React from 'react'
import { Image, StyleSheet, Text } from 'react-native'

// export default function Logo() {
//   return <Image source={require('../assets/logo.png')} style={styles.image} />
// }

const Logo = ({ width = 110, height = 110 }) => <Image source={require('../assets/logo.png')} style={{...styles.image, width,
  height}} />;

export default Logo;

const styles = StyleSheet.create({
  image: {
    width: 110,
    height: 110,
    marginBottom: 8,
  },
})
