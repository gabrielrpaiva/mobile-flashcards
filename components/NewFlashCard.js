import React from 'react';
import { StyleSheet, Text, View, TextInput,TouchableOpacity,Alert } from 'react-native';
import { connect } from 'react-redux'
import TextButton from './TextButton'
import { addCard, receiveCards } from '../actions/index'
import { red, black, grayPlus,white,gray } from '../utils/colors'
import { setNewCard, getAllCards } from '../utils/api'
import { NavigationActions } from 'react-navigation'




class NewFlashCard extends React.Component {
  constructor(props) {

    super(props);
    this.state = {
      titleText: ''
    };
    this.setNewCard = this.setNewCard.bind(this);

  }



  setNewCard() {
    const { titleText } = this.state

    const { addCard } = this.props;

    const card = { [titleText]: { title: titleText, questions: [] } };   

    setNewCard(card)
      .then( 
        Alert.alert('Successful', 'Your card was successfully add',
        [
          addCard(card),
            {
                text: 'OK', onPress: () =>                
                this.props.navigation.goBack()
            }
        ], )
      
      )
  }

  render() {
 
    return (
      <View style={style.container}>
        <Text>Add a new card name</Text>
        <TextInput  style={style.input}
          onChangeText={(titleText) => this.setState({ titleText })}
          value={this.state.titleText} />
        <TouchableOpacity style={style.addCardButton} onPress={this.setNewCard}>
          <Text style={style.addCardText}>Add Card </Text>
       </TouchableOpacity>
      </View>
    )

  }

}

const style = StyleSheet.create({   
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 20,
},
  input: {
      width: 300,
      height: 56,
      padding: 12,
      borderWidth: 1,
      borderColor: gray,
      margin: 16
  },
  addCardButton: {
    backgroundColor: red,
    padding: 12,
    height: 44,
    borderRadius: 7
},   
addCardText: {
  color: white,
  fontSize: 22,
  textAlign: 'center',
}

});

const mapStateToProps = (state) => ({
  titleText: state.titleText,
  allCards: state.allCards
})

const mapDispatchToProps = (dispatch) => {
  return {
    addCard: (card) => dispatch(addCard(card)),
    receiveCards: (cards) => dispatch(receiveCards(cards))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewFlashCard);