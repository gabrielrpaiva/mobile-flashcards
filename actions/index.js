export const RECEIVE_CARDS = 'RECEIVE_CARDS'
export const ADD_CARD = 'ADD_CARD'
export const ADD_QUESTION = 'ADD_QUESTION'

export function receiveCards (cards) {
 
  return {
    type: RECEIVE_CARDS,
    cards,
  }
}

export function addCard (card) {
 
  return {
    type: ADD_CARD,
    card,
  }
}

export function addQuestion (card) { 
  return {
    type: ADD_QUESTION,
    card,
  }
}