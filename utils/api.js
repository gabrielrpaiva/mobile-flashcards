import { AsyncStorage } from 'react-native'
import { getInicialCards } from './helpers'
import { FLASHCARDS_STORAGE_KEY } from './_cards'
import { receiveCards } from '../actions/index'


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
    
    return  AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY)
        
}

export function setNewCard(allCards) {
    //console.log("setNewCard: " + card.title);

    return AsyncStorage.mergeItem(FLASHCARDS_STORAGE_KEY, JSON.stringify({
        allCards
    }))

}

export function MetItecards(cards) {
    console.log("MetItecards: ");
    if (typeof cards === 'undefined') {

        return false

    } else {
        return true
    }


}


export function formatCalendarResults(results) {
    console.log("veiog plo: ")
    return results === null
        ? console.log("lololo")
        : console.log("thththth")
}