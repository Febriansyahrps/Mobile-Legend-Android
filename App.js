import React from 'react';
import {TabNavigator} from 'react-navigation';

import {Home} from './Screen/Home';
import {Heroes} from './Screen/Heroes';
import {Settings} from './Screen/Settings';

const Tab = TabNavigator({
  Home: {
    screen: Home,
  },
  Heroes: {
    screen: Heroes,
  },
  Settings: {
    screen: Settings,
  }
},
{
  tabBarPosition: 'bottom',
  swipeEnabled: true,
  tabBarOptions:{
    activeTintColor: '#fff',
    activeBackgroundColor: '#000666',
    inactiveTintColor: '#fff',
    style:{
      backgroundColor:'#000666',
    },

    labelStyle: {
      fontSize: 10,
      color: 'white',
      padding: 6,
    }
  }
});

export default class App extends React.Component {
  render() {
    return (
      <Tab/>
    );
  }
}