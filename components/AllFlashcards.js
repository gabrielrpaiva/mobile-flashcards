import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { getInicialCards } from '../utils/helpers'
import TextButton from './TextButton'
import { receiveCards } from '../actions/index'
import { connect } from 'react-redux'
import { getAllCards } from '../utils/api'


class AllFlashcards extends React.Component {


  componentDidMount() {
    const { receiveCards } = this.props


    getAllCards().then((cards) => receiveCards(cards))
    

  }



  render() {
 

    const { allCards } = this.props
 

    return (
      <View>
        {Object.keys(allCards).map((key) => {
          const { title, questions, ...rest } = allCards[key]


          return (
            <View key={title}>
              <TextButton style={styles.container} onPress={() => this.props.navigation.navigate(
                'CardDetail',
                { entryId: key }
              )}>
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

const mapStateToProps = (state) => ({
  allCards: state.allCards,
})

const mapDispatchToProps = (dispatch) => {
  return {
    receiveCards: () => dispatch(receiveCards())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllFlashcards);