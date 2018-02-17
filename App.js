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
import { Provider } from 'react-redux'
import reducer from './reducers'
import {setLocalNotification} from './utils/helpers';
import MainNavigator from './Routes'
import cardStore from './CardStore'

function FlashCardsStatusBar({ backgroundColor, ...props }) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
} 

 
export default class App extends React.Component {

  componentDidMount() {
    setLocalNotification();
}

  render() {
    return (
      <Provider store={cardStore}>
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
