import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import AllFlashcards from './components/AllFlashcards'
import NewFlashCard from './components/NewFlashCard'
import { TabNavigator, StackNavigator } from 'react-navigation'
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import { blue, white,gray,newBlue } from './utils/colors'
import { Constants } from 'expo'
import CardDetail from './components/CardDetail'
import NewQuestion from './components/NewQuestion'
import Quiz from './components/Quiz'
import { createStore,applyMiddleware } from 'redux'
import {createLogger} from 'redux-logger'  
import { Provider } from 'react-redux'
import reducer from './reducers'
import {setLocalNotification} from './utils/helpers';

function FlashCardsStatusBar({ backgroundColor, ...props }) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}



const Tabs = TabNavigator({
  AllFlashcards: {
    screen: AllFlashcards,
    navigationOptions: {
      tabBarLabel: 'Home' 
    },
  },
  NewFlashCard: {
    screen: NewFlashCard,
    navigationOptions: {
      tabBarLabel: 'New Card' 
    },
  }
}, {
  navigationOptions: {
    header: null
  },
  tabBarOptions: {
    activeTintColor:  white
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
        backgroundColor: newBlue,
      }
    }
  },
  NewQuestion: {
    screen: NewQuestion,
    navigationOptions: {
      title: 'Add Your Question',
      headerTintColor: white, 
      headerStyle: {
        backgroundColor: newBlue,
      }
    }
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: {
      title: 'Quiz',
      headerTintColor: white, 
      headerStyle: {
        backgroundColor: newBlue,
      }
    }
  }
})
 

const store =  (createStore)(reducer, 
  applyMiddleware(createLogger())
) 


 
export default class App extends React.Component {

  componentDidMount() {
    setLocalNotification();
}

  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <FlashCardsStatusBar backgroundColor={white} barStyle="light-content" />
          <MainNavigator />
        </View>
      </Provider>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
