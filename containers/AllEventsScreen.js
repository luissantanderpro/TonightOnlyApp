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
import { connect }            from 'react-redux'; 
import { Card,
		 List,
		 ListItem } 		  from 'react-native-elements'; 
import LinearGradient         from 'react-native-linear-gradient';
// -------------------------------------------------
// Import Actions from Store 
import { fetchAllEvents }     from '../store/actions'; 


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

	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.loadAllEvents();
	}

	// Navigates to the EventVenueInfoScreen 
	onEventButtonPress = (eventIndex, event) => {

		console.log(eventIndex, event);
		const { navigate } = this.props.navigation; 
		navigate('eventInfo', { eventIndex, event });
	}

	render() {
		const events = this.props.events.map((item, i) => {
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
			<LinearGradient 
			colors={['#010812', '#222246', '#67286b', '#b90e6e', '#fe0b4c']} 
			start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
			style={ styles.container } >
				<ScrollView style={styles.container}>
					{ events }
				</ScrollView>
			</LinearGradient>
		); 
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
});

// Map State To Props from Store 
// -------------------
const mapStateToProps = state => {
	return {
		events: state.events
	}
}

const mapDispatchToProps = dispatch => {
	return {
		loadAllEvents: () => dispatch(fetchAllEvents()) 
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(AllEventsScreen);  