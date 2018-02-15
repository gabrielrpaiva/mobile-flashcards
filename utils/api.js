import { AsyncStorage } from 'react-native'
import { getInicialCards } from './helpers'
import { FLASHCARDS_STORAGE_KEY } from './_cards'
import { receiveCards } from '../actions/index'


let cards = {
   
        Bowie: {
            title: 'Bowie',
            questions: [
                {
                    question: 'Em que país Bowie gravou sua famosa trilogi?',
                    answer: 'Alemanha'
                },
                {
                    question: "A capa do album 'BlackStar' faz referencia a qual outra capa de do Bowie?",
                    answer: 'Heroes'
                },
                {
                    question: "Quem compôs a música 'Fame' junto de Bowie?",
                    answer: 'Jhon Lennon'
                }
            ]
        },
        Radiohead: {
            title: 'Radiohead',
            questions: [
                {
                    question: 'Em qual cidade inglesa a banda se formou?',
                    answer: 'Oxford'
                },
                {
                    question: "Qual foi o primeiro algun que Nigle Gondrich produziu?",
                    answer: 'OK Computer'
                }
            ]
        }
   
}


export function fetchCards() {
  
    return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY).then(results => { 
        console.log(results)     
        return results === null ? 
        getFirstCards() : 
        JSON.parse(results)
    });
}

export function getFirstCards() { 
    AsyncStorage.setItem(FLASHCARDS_STORAGE_KEY, JSON.stringify(cards));
    return cards;
}

export function getAllCards() {
    console.log("veioggp: ")

    /*  AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY)
    .then(val => console.log(val)
    .catch(err => console.log(err))) */

    /*   AsyncStorage.setItem(FLASHCARDS_STORAGE_KEY, JSON.stringify('alhugma')).
      then(MetIte()) */

    /*    AsyncStorage.setItem(FLASHCARDS_STORAGE_KEY, 'allong')
        .then(x => AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY)
        .then(value => 
            console.log("fddf: " + value)   
        ))  */



    return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY)
    //.then(cards => receiveCards(cards))


}


export function verifyAsyncStorage() {

    const kt = false;

    return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY)

}

export function setNewCard(card) { 

    return AsyncStorage.mergeItem(FLASHCARDS_STORAGE_KEY, JSON.stringify(
        card
    ))

}

export function addQuestionInCard({card, cardName}) {
    return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY, (err, result) => {
        let cards = JSON.parse(result);
       console.log("cards: " + cards)
       console.log("cardName: " + cardName)
        let newQuestions = JSON.parse(JSON.stringify(cards[cardName].questions));
        console.log("after: ")
        newQuestions[newQuestions.length] = card;

        const value = JSON.stringify({
            [cardName]: {title: cardName, questions: newQuestions},
        });

        AsyncStorage.mergeItem(FLASHCARDS_STORAGE_KEY, value);
    });
}
 

