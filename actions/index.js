export const RECEIVE_CARDS = 'RECEIVE_CARDS'
export const ADD_CARD = 'ADD_CARD'

export function receiveCards (allCards) {
  console.log("receivveCards: " + allCards)
  return {
    type: RECEIVE_CARDS,
    allCards,
  }
}

export function addCard (allCards) {
  console.log("addCard: " + allCards) 
  return {
    type: ADD_CARD,
    allCards,
  }
}