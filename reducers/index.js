import { RECEIVE_CARDS, ADD_CARD, ADD_QUESTION } from '../actions'
import { getInicialCards } from '../utils/helpers'
import reduceReducers from '../utils/reducers-util'

/*  const cardsInitialState = {   
    allCards: getInicialCards()  
  } 
 */
const cardsInitialState = {
    allCards: {}
}


function cards(state = {}, action) {
    switch (action.type) {
        case RECEIVE_CARDS:
            return { ...state, ...action.cards };

        case ADD_CARD:
            return { ...state, ...action.card };

        case ADD_QUESTION:
            const { title, questions, question, answer } = action.card;
            const newQuestions = JSON.parse(JSON.stringify(questions))
                .concat([{ question, answer }]);

            return {
                ...state,
                [title]: { ...state[title], questions: newQuestions },
            };
        default:
            return state;
    }
}

//const cards = reduceReducers(getAllCards, cardsAdd)

export default cards