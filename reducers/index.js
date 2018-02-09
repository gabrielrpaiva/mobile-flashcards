import { RECEIVE_CARDS, ADD_CARD } from '../actions'
import { getInicialCards } from '../utils/helpers'
import reduceReducers from '../utils/reducers-util'

const cardsInitialState = {
    allCards: getInicialCards()
  }
  

function getAllCards (state = cardsInitialState, action) {
 console.log("getAllCards: " + action.type) 
  switch (action.type) {
    case RECEIVE_CARDS :
      return {
        ...state,
        ...action.allCards,
      } 
    default :
      return state
  }
}

const cardsToAdd = {
  title: '',  
  question: []
}

function cardsAdd (state = allCards, action) {
  //console.log("cardsAdd: " + action.type) 
  switch (action.type) { 
    case ADD_CARD :
      return {
        ...state,
        ...action.allCards
      }
    default :
      return state
  }
}

const cards = reduceReducers(getAllCards, cardsAdd)

export default cards