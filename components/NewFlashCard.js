import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { connect } from 'react-redux'
import TextButton from './TextButton'
import { addCard, receiveCards } from '../actions/index'
import { setNewCard,getAllCards } from '../utils/api'
import { NavigationActions } from 'react-navigation' 




class NewFlashCard extends React.Component {
  constructor(props) {

    super(props);
    this.state = {
      title: '',
      question: []
      };
      this.setNewCard = this.setNewCard.bind(this);
    
    }
   


  setNewCard() {
    const { title } = this.state
   console.log("antes: ") 
   // const { card } = this.props
   const stateCopy = Object.assign({}, this.state);

   const allCards ={[this.state.title]: stateCopy};

   console.log("stateCopyf: " + stateCopy)
   setNewCard(allCards).then(addCard({
    allCards
  })).then(
    
    getAllCards().then(cards => receiveCards(JSON.parse(cards))).
    then(this.props.navigation.dispatch(NavigationActions.back({key: 'NewFlashCard'})))
   )

   
   
   console.log("deposif")
  // getAllCards().then((cards) => receiveCards(cards))
    //console.log("veja: " + card) 
    //addCard(this.state.title)

  }

  render() {
  
  //  const { title } = this.state
    //console.log("vejass: " + this.state) 
   // console.log("vejaAki: " + title) 
    return (
      <View>
        <Text>Teste</Text>
        <TextInput style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={(title) => this.setState({ title })}
          value={this.state.title} />
         <TextButton style={{padding: 10}} onPress={this.setNewCard}>
         Add Card
       </TextButton>
      </View>
    )

  }

}

const mapStateToProps = (state) => ({   
  title: state.title,
  allCards: state.allCards 
})

const mapDispatchToProps = (dispatch) => {
  return {
    addCard: (card) => dispatch(addCard(card)),
    receiveCards: (cards) => dispatch(receiveCards(cards))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(NewFlashCard);