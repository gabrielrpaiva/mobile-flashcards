import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { getInicialCards } from '../utils/helpers'
import TextButton from './TextButton'





export default class AllFlashcards extends React.Component {
  render() {

    const allCards = getInicialCards()
    return (
      <View>
        {Object.keys(allCards).map((key) => {
          const { title,questions, ...rest } = allCards[key]


          return (
            <View key={title}>
              <TextButton style={styles.container} onPress={this.reset}>
          {title}{"\n"}  Total Cards ( {questions.length} )
              </TextButton>

            </View>
          )
        })}
      </View>
    )

  }

}


const styles = StyleSheet.create({
  container: {
    flex: 1  
    
  } 
}) 