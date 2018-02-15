import React from 'react';
import { StyleSheet, Text, View, AsyncStorage, FlatList } from 'react-native';
import { getInicialCards } from '../utils/helpers'
import TextButton from './TextButton'
import { receiveCards, addCard } from '../actions/index'
import { connect } from 'react-redux'
import { fetchCards, getAllCards, setNewCard, verifyAsyncStorage } from '../utils/api'


class AllFlashcards extends React.Component { 

  componentDidMount() {
    const { receiveCards } = this.props     

    fetchCards().then(cards => receiveCards(cards));
 
  }

  renderItem = ({ item }) => (
    <View style={styles.container}>
      <TextButton style={styles.container} onPress={() => this.props.navigation.navigate(
        'CardDetail',
        { title: item.title }
      )}>
        {item.title}{"\n"}  Total Cards ({item.questions.length})
       </TextButton>
    </View>
  );

  render() {
    const { allCards } = this.props

    return (
      <View>
        <FlatList
          data={Object.values(allCards).sort((a, b) => a.title > b.title)}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => index} />
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
  allCards: state
})

const mapDispatchToProps = (dispatch) => {
  return {
    receiveCards: (cards) => dispatch(receiveCards(cards)),
    addCard: (card) => dispatch(addCard(card)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllFlashcards);