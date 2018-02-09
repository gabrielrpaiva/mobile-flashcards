import React from 'react';
import { StyleSheet, Text, View,AsyncStorage } from 'react-native';
import { getInicialCards } from '../utils/helpers'
import TextButton from './TextButton'
import { receiveCards, addCard } from '../actions/index'
import { connect } from 'react-redux'
import { getAllCards, setNewCard,verifyAsyncStorage } from '../utils/api'


class AllFlashcards extends React.Component {
  constructor(props) {

    super(props);
    this.state = {
      title: 'algo',
      question: []
    };


  }

  componentDidMount() {
    const { receiveCards } = this.props

   AsyncStorage.removeItem("FlashCards:cards")
//console.log("akikk: " + rt);
    //receiveCards(null)
 getAllCards()
      .then(cards => receiveCards(JSON.parse(cards)))  

       //getAllCards() 
     // receiveCards(null)
    //getAllCards() 


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
                {title}{"\n"}  Total Cards 
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
  allCards: state.allCards
})

const mapDispatchToProps = (dispatch) => {
  return {
    receiveCards: (cards) => dispatch(receiveCards(cards)),
    addCard: (card) => dispatch(addCard(card)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllFlashcards);