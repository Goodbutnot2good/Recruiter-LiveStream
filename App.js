import React, { Component } from 'react'
import { createStackNavigator } from 'react-navigation';
import HomeScreen from './screens/HomeScreen'
import LiveStreamScreen from './screens/LiveStreamScreen'
import ListStreamScreen from './screens/ListStreamScreen'
import QuestionScreen from './screens/QuestionScreen'

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    LiveStream: LiveStreamScreen,
    ListStream: ListStreamScreen,
    Question: QuestionScreen,
  },
  {
    initialRouteName: 'Home'
  }
);

export default class App extends Component {
  render() {
    return <RootStack />;
  }
}


