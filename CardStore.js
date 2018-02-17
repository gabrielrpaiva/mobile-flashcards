
import { createStore,applyMiddleware } from 'redux'
import {createLogger} from 'redux-logger'  
import reducer from './reducers'


const cardStore =  (createStore)(reducer, 
    applyMiddleware(createLogger())
  ) 

  export default cardStore