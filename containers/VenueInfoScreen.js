// Imported Modules 
// -------------------------------------------------
import React, { Component }       from 'react'; 
import { View, 
		 Text, 
		 StyleSheet, 
		 Dimensions,
		 ScrollView,
		 TouchableOpacity }       from 'react-native'; 
import ImageSlider                from 'react-native-image-slider';
import LinearGradient             from 'react-native-linear-gradient';
import { connect }                from 'react-redux'; 
import { Card,
		 List,
		 ListItem }				  from 'react-native-elements';
import { Icon }					  from 'react-native-elements';  
// -------------------------------------------------
// Import Actions from Store 
import { fetchAllSelectedVenueEvents }     from '../store/actions'; 

// Get the specific device width 
const SCREEN_WIDTH = Dimensions.get('window').width; 

const events = [
	require('../assets/events1.jpg'),
	require('../assets/events2.png'),
	require('../assets/events3.png')
]

// --------
import EventsCardComponent from '../components/UI/EventsCardComponent'; 
import VenueButtons from        '../components/VenueButtons'; 

class VenueInfoScreen extends Component {
	static navigationOptions = ({ navigation }) => ({
		title: navigation.getParam('venueName'),
		headerStyle: {
			backgroundColor: 'black'
		},
		headerTitleStyle: {
			color: '#fff'
		}
	})

	state = {
		displayChoice: 'Events'
	}

	constructor(props) {
		super(props); 

		const { venueId } = this.props.navigation.state.params; 

		this.props.loadVenueEvents(venueId); 
	} 

	// Displays Events from Aggreageted Data 
	displayVenueEvents = () => {

		// If no events were returned error check return null 
		if (!this.props.events) {
			return null;
		}
		
		return this.props.events.map((month, i) => {
				const shows = month.events.map((event, j) => {
					return (
						<ListItem 
							key={j}
							title={event} 
							titleStyle={{fontSize: 13}} 
						/>
					);
				});

				return (
					<View key={i}>
						<View style={styles.monthHeader} >
							<Text>{ month.eventMonth }</Text>
						</View>
						<List>
							{ shows }
						</List>
					</View>
				);
		});
	}

	// Displays to the user the venues address and contact info. 
	displayVenueInfo = () => {

		const { venueAddress, venuePhone } = this.props.venueInfo; 

		return (
			<View>
				<View style={styles.monthHeader}>
					<Text>Venue Contact Information</Text>
				</View>
				<View style={styles.infoStyling}>
					<Text>Address: {venueAddress}</Text>
					<Text>Phone: {venuePhone}</Text>
				</View>
			</View>

		);
	}

	// Displays to the user the venues social links. 
	displayVenueSocialLinks = () => {
		return (
			<View>
				<View style={styles.socialMediaIconsStyle}>
					<TouchableOpacity>
						<Icon 
							name="facebook-square" 
							type="font-awesome"
							color="black"
							size={70}
						/>
					</TouchableOpacity>
					<TouchableOpacity>
						<Icon 
							name="youtube-square" 
							type="font-awesome"
							color="black"
							size={70}
						/>
					</TouchableOpacity>
				</View>
				<View style={[styles.socialMediaIconsStyle, {justifyContent: 'center'}]}>
					<TouchableOpacity onPress={() => Linking.openURL(testURL)}>
						<Icon 
							name="globe" 
							type="font-awesome"
							color="black"
							size={70}
						/>
					</TouchableOpacity>
				</View>
				<View style={styles.socialMediaIconsStyle}>
					<TouchableOpacity>
						<Icon 
							name="twitter-square" 
							type="font-awesome"
							color="black"
							size={70}
						/>
					</TouchableOpacity>
					<TouchableOpacity>
						<Icon 
							name="instagram" 
							type="font-awesome"
							color="black"
							size={70}
						/>
					</TouchableOpacity>
				</View>
			</View>
		);
	}

	// What to Render to the User Helper Function. 
	selectedRenderedDisplay = () => {
		switch (this.state.displayChoice) {
			case 'Events': 
				return this.displayVenueEvents();
			case 'Info':
				return this.displayVenueInfo();
			case 'Social': 
				return this.displayVenueSocialLinks(); 
			default: 
				return <Text>None</Text>
		}
	}

	// Changes the display of each individual field.
	changeDisplayChoiceField = (choice) => {
		this.setState({displayChoice: choice});
	}

	render() {

		let display = this.selectedRenderedDisplay(); 

		return (
			<LinearGradient 
				colors={['#010812', '#222246', '#67286b', '#b90e6e', '#fe0b4c']} 
				start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
				style={ styles.container }>
					<View style={styles.imageSliderContainer} >
						<ImageSlider 
								loopBothSides
								autoPlayWithInterval={3000}
								images={events}
						/>
					</View>
					<View style={styles.buttonInfoControlsContainer}>
						<VenueButtons title="Events" func={this.changeDisplayChoiceField} />
						<VenueButtons title="Info" func={this.changeDisplayChoiceField}   />
						<VenueButtons title="Social" func={this.changeDisplayChoiceField} />
					</View>		
					<ScrollView style={styles.scrollContainer}>
						{ display }
					</ScrollView>
			</LinearGradient>
		); 
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	imageSliderContainer: {
		width: SCREEN_WIDTH,
		height: 200,
		padding: 10
	},
	buttonInfoControlsContainer: {
		width: SCREEN_WIDTH,
		height: 40,
		padding: 10,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center'
	},
	scrollContainer: {
		padding: 5,
		margin: 20,
		borderWidth: 1,
		borderColor: 'black',
		backgroundColor: '#fff'
	},
	monthHeader: {
		width: '100%',
		marginTop: 20,
		backgroundColor: '#fff',
		justifyContent: 'center',
		alignItems: 'center'
	},
	infoStyling: {
		marginTop: 20,
		height: 60,
		justifyContent: 'space-between'
	},
		socialMediaIconsStyle: {
		width: '100%',
		justifyContent: 'space-between',
		alignItems: 'center',
		flexDirection: 'row',
		padding: 15
	}
});

// Connect to Redux Store 
// -------------------------
// Map State To Props from Store 
// -------------------
const mapStateToProps = state => {
	return {
		events: state.venueEvents,
		venueInfo: state.venueInfo
	};
};

const mapDispatchToProps = dispatch => {
	return {
		loadVenueEvents: (venueId) => dispatch(fetchAllSelectedVenueEvents(venueId)) 
	};
};


export default connect(mapStateToProps, mapDispatchToProps)(VenueInfoScreen); 





