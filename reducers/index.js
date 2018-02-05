import { RECEIVE_CARDS, ADD_CARD } from '../actions'

import { getInicialCards } from '../utils/helpers'

const cardsInitialState = {
    allCards: getInicialCards()
  }
  

function cards (state = cardsInitialState, action) {
  switch (action.type) {
    case RECEIVE_CARDS :
      return {
        ...state,
        ...state.allCards,
      }
    case ADD_CARD :
      return {
        ...state,
        ...action.card
      }
    default :
      return state
  }
}

export default cards