import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import { red } from '../utils/colors'


const TextButton = ({ children, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.AndroidSubmitBtn}>{children}</Text>

    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  reset: {
    textAlign: 'center',
    color: red,
  },
  AndroidSubmitBtn: {
    backgroundColor: red,
    padding: 5,
    paddingLeft: 30,
    paddingRight: 30,
    margin: 10,
    height: 45,
    borderRadius: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'

  }
}) 

export default TextButton;