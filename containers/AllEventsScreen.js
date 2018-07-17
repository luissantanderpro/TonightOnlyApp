// Imported Modules 
// -------------------------------------------------
import React, { Component }   from 'react'; 
import { View, 
		 Text, 
		 TouchableOpacity,
		 Button,
		 StyleSheet,
		 Dimensions,
		 ScrollView }         from 'react-native'; 
import { Card,
		 List,
		 ListItem } 		  from 'react-native-elements'; 
// -------------------------------------------------
// Imported Components  
// --------
import EventsCardComponent from '../components/UI/EventsCardComponent'; 
// --------

const SCREEN_WIDTH = Dimensions.get('window').width; 

// Temporary Assignment of Events Matrix 
const listOfEvents = [{month: 'August 2018', 
 					   events: ['Aug. 4th | Hard Summer 2018 ',
 					   		  'Aug. 10th  | Timmy Trumpet at Academy LA',
 					   		  'Aug. 11th  | Borgeous at Exchange LA'
 					   		  ]
 					   },
 					   {
 					   	month: 'September 2018',
 					   	events: [ 'Sept. 1st – Ookay at the Fonda Theatre',
 					   			'Sept. 2nd – Nervo at Academy LA',
 					   			'Sept. 14th – Nocturnal Wonderland 2018 at Glen Helen Regional Park'
 					    ]}
 					 ];

// Displays all the events, shows, and festivals. 
class AllEventsScreen extends Component {
	static navigationOptions = ({ navigation }) => ({
		title: 'All Events Calendar',
				headerStyle: {
			backgroundColor: 'black'
		},
		headerTitleStyle: {
			color: '#fff'
		}
	})

	// Navigates to the EventVenueInfoScreen 
	onEventButtonPress = (eventIndex, event) => {
		const { navigate } = this.props.navigation; 
		navigate('eventInfo', { eventIndex, event });
	}

	render() {
		// Pass the listOfEvent to render Device Tags 
		const events = listOfEvents.map((item, i) => {
			return (
				<EventsCardComponent 
					key={i}
					month={item.month} 
					events={item.events}
					eventMonthIndex={i}
					onEventButtonPress={this.onEventButtonPress} /> 
			);
		});
		
		return (
			<ScrollView style={styles.container}>
				{ events }
			</ScrollView>
		); 
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'purple' // Temperory color must delete 
	}
});



export default AllEventsScreen; 