import React from 'react'
import { View, StyleSheet } from 'react-native'
import { theme } from '../theme'

const Background = ({ children }) => {
  return (
    <View style={styles.container}>
      {children}
    </View>
  )

  // return (

  //   <ImageBackground
  //     source={require('../assets/background_dot.png')}
  //     resizeMode="repeat"
  //     style={styles.background}
  //   >
  //     <KeyboardAvoidingView style={styles.container} behavior="padding">
  //       {children}
  //     </KeyboardAvoidingView>
  //   </ImageBackground>
  // )
}

export default Background

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    backgroundColor: theme.colors.surface,
  },
  container: {
    flex: 1,
    padding: 10,
    width: '100%',
    // maxWidth: 340,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
