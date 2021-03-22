/* eslint-disable prettier/prettier */
import React from 'react'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native-paper'
import { Header } from 'react-native/Libraries/NewAppScreen'
import { theme } from '../theme'

const AppHeader = (props) => {
  return <Text style={styles.header} {...props} />
}
export default AppHeader;
const styles = StyleSheet.create({
  header: {
    fontSize: 21,
    color: theme.colors.primary,
    fontWeight: 'bold',
    paddingVertical: 12,
  },
})
