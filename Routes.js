import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import AllFlashcards from './components/AllFlashcards'
import NewFlashCard from './components/NewFlashCard'
import CardDetail from './components/CardDetail'
import NewQuestion from './components/NewQuestion'
import { TabNavigator, StackNavigator } from 'react-navigation'
import { blue, white,gray,newBlue } from './utils/colors'
import Quiz from './components/Quiz'

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


  export default MainNavigator