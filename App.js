// Imported Modules 
// -------------------------------------------------
import React                      from 'react';
import { StyleSheet, Text, View, YellowBox } from 'react-native';
import { createStackNavigator }   from 'react-navigation'; 

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);


// Imported Screens to Be Used by React Native Navigation 
// -------------------------------------------------
import MainScreen           from './containers/MainScreen'; 
import AllEventsScreen      from './containers/AllEventsScreen'; 
import CityEventsScreen     from './containers/CityEventsScreen'; 
import EventVenueInfoScreen from './containers/EventVenueInfoScreen'; 

export default class App extends React.Component {
  render() {

    // Setup the navigation mechanics for the application.
    const MainNavigator = createStackNavigator({
        main:       { screen: MainScreen },
        allEvents:  { screen: AllEventsScreen },
        cityEvents: { screen: CityEventsScreen }, 
        eventInfo:  { screen: EventVenueInfoScreen }
    });

    // Render the main Navigator to navigate between screens 
    return <MainNavigator />;
  }
}
