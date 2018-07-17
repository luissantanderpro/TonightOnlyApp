// Imported Modules 
// -------------------------------------------------
import React, { Component }       from 'react'; 
import { View, 
		 Text, 
		 StyleSheet, 
		 Dimensions,
		 ScrollView,
		 TouchableOpacity } from 'react-native'; 
import ImageSlider                from 'react-native-image-slider';
import LinearGradient             from 'react-native-linear-gradient';
import { Card,
		 List,
		 ListItem }				  from 'react-native-elements';
import { Icon }					  from 'react-native-elements';  

const SCREEN_WIDTH = Dimensions.get('window').width; 

const events = [
	require('../assets/events1.jpg'),
	require('../assets/events2.png'),
	require('../assets/events3.png')
]

// Testing 
// --------
const listOfEvents = [{month: 'August 2018', 
 					   events: ['Aug. 4th - Excision',
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

const testVenueInfo = {
	address: '618 S Spring St, Los Angeles, CA 90014',
	phone: '(213) 627-8070'
}

// --------
import EventsCardComponent from '../components/UI/EventsCardComponent'; 
import VenueButtons from        '../components/VenueButtons'; 

class VenueInfoScreen extends Component {
	static navigationOptions = {
		title: 'Exchange LA',
		headerStyle: {
			backgroundColor: 'black'
		},
		headerTitleStyle: {
			color: '#fff'
		}
	};

	state = {
		displayChoice: 'Events'
	}

	// Displays Events from Aggreageted Data 
	displayVenueEvents = () => {
		return listOfEvents.map((month, i) => {

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
							<Text>{ month.month }</Text>
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
		return (
			<View>
				<View style={styles.monthHeader}>
					<Text>Venue Contact Information</Text>
				</View>
				<View style={styles.infoStyling}>
					<Text>Address: {testVenueInfo.address}</Text>
					<Text>Phone: {testVenueInfo.phone}</Text>
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

	// Changes the display of each individual field 
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



export default VenueInfoScreen; 








