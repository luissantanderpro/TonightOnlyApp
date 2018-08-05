// Imported Modules 
// -------------------------------------------------
import React                      from 'react';
import { StyleSheet, 
         Text, 
         View, YellowBox }      from 'react-native';
import { createStackNavigator } from 'react-navigation'; 
import { Provider }             from 'react-redux'; 

// Disables isMounted Warning 
// -------------------------------------------------
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

// Import Redux Store 
// -------------------------------------------------
import store                from './store'; 

// Imported Screens to Be Used by React Native Navigation 
// -------------------------------------------------
import MainScreen           from './containers/MainScreen'; 
import AllEventsScreen      from './containers/AllEventsScreen'; 
import CityEventsScreen     from './containers/CityEventsScreen'; 
import EventVenueInfoScreen from './containers/EventVenueInfoScreen'; 
import VenueInfoScreen      from './containers/VenueInfoScreen'; 
import ArtistInfoScreen     from './containers/ArtistInfoScreen'; 

// --------------------------------------------------
export default class App extends React.Component {
  render() {

    // Setup the navigation mechanics for the application.
    const MainNavigator = createStackNavigator({
        main:       { screen: MainScreen },
        allEvents:  { screen: AllEventsScreen },
        cityEvents: { screen: CityEventsScreen }, 
        eventInfo:  { screen: EventVenueInfoScreen },
        venueInfo:  { screen: VenueInfoScreen },
        artistInfo: { screen: ArtistInfoScreen }
    });

    // Render the main Navigator to navigate between screens 
    return ( 
        <Provider store={store}>
            <MainNavigator />
        </Provider>
    );
  }
}
