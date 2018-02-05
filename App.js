import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import AllFlashcards from './components/AllFlashcards'
import NewFlashCard from './components/NewFlashCard'
import { TabNavigator, StackNavigator } from 'react-navigation'
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import { blue, white } from './utils/colors'
import { Constants } from 'expo'
import CardDetail from './components/CardDetail'
import { createStore,applyMiddleware } from 'redux'
import {createLogger} from 'redux-logger'  
import { Provider } from 'react-redux'
import reducer from './reducers'

function FlashCardsStatusBar({ backgroundColor, ...props }) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

const Tabs = TabNavigator({
  Home: {
    screen: AllFlashcards,
  },
  NewCard: {
    screen: NewFlashCard,
    navigationOptions: {
      tabBarLabel: 'New Card'
    }
  }
})


const MainNavigator = StackNavigator({
  Home: {
    screen: Tabs,
    navigationOptions: {
      header: null,
    }
  },
  CardDetail: {
    screen: CardDetail,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: blue,
      }
    }
  }
})

//const middleware = applyMiddleware( createLogger );
//export default createStore(reducer, middleware);



const store =  (createStore)(reducer, 
  applyMiddleware(createLogger())
) 
 
export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <FlashCardsStatusBar backgroundColor={blue} barStyle="light-content" />
          <MainNavigator />
        </View>
      </Provider>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
