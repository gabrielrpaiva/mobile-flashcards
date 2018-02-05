import { AsyncStorage } from 'react-native'
import { getInicialCards } from './helpers'
import {  FLASHCARDS_STORAGE_KEY } from './_cards'

 
    export function getAllCards () {
        return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY)
        
      }

    
 

