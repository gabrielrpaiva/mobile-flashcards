import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AllFlashcards from './components/AllFlashcards'

export default class App extends React.Component {
  render() {
    return (
     
        <AllFlashcards></AllFlashcards>
    
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
