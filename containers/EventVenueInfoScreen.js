// Imported Modules 
// -------------------------------------------------
import React, { Component }   from 'react'; 
import { View, 
		 Text, 
		 TouchableOpacity,
		 StyleSheet,
		 Dimensions,
		 Linking
	   }         			   from 'react-native'; 
import ImageSlider             from 'react-native-image-slider';
import LinearGradient          from 'react-native-linear-gradient';
import { Icon }				   from 'react-native-elements'; 

const SCREEN_WIDTH = Dimensions.get('window').width; 

// Temporary Assignment of Events Matrix 
const listOfEvents = [{month: 'August 2018', 
 					   info: ['Aug. 4th | Hard Summer 2018 ',
 					   		  'Aug. 10th  | Timmy Trumpet at Academy LA',
 					   		  'Aug. 11th  | Borgeous at Exchange LA'
 					   		  ]
 					   },
 					   {
 					   	month: 'September 2018',
 					   	info: [ 'Sept. 1st – Ookay at the Fonda Theatre',
 					   			'Sept. 2nd – Nervo at Academy LA',
 					   			'Sept. 14th – Nocturnal Wonderland 2018 at Glen Helen Regional Park'
 					    ]}
 					 ];

const tempImages = [
	require('../assets/events1.jpg'),
	'https://placeimg.com/640/640/nature'
]

const testURL = 'https://soundcloud.com/getterofficial/throwin-elbows-getter-virtual-riot-remix'; 
const buyTicketsTestURL = 'http://exchangela.electrostub.com/event.cfm?id=147387'; 
// ----------------------------------------------------------------------------

class EventVenueInfoScreen extends Component {
	static navigationOptions = ({ navigation }) => ({
		title: 'Exision @ Exchange LA',
				headerStyle: {
			backgroundColor: 'black'
		},
		headerTitleStyle: {
			color: '#fff'
		}
	})

	constructor(props) {
		super(props);
		const { eventIndex, event } = this.props.navigation.state.params;

		console.log(eventIndex, event);

	}

	render() {
		return (
			<LinearGradient 
				colors={['#010812', '#222246', '#67286b', '#b90e6e', '#fe0b4c']} 
				start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
				style={ styles.container } >
				<ImageSlider 
					loopBothSides
					autoPlayWithInterval={3000}
					images={tempImages}
				/>
				<View style={styles.venueInfoStyle}>
					<View style={styles.venueBox1}>
						<Text style={styles.textStyle}>Los Angeles, CA</Text>
						<Text style={styles.textStyle}>Exchange LA</Text>
						<Text style={styles.textStyle}>10:00 PM - Close</Text>
					</View>
					<View style={styles.venueBox2}>
						<Text style={styles.textStyle}>Saturday</Text>
						<Text style={styles.textStyle}>July 20th</Text>
						<Text style={styles.textStyle}>2018</Text>
					</View>
				</View>
				<View style={styles.venueArtistInfoStyle}>
					<View style={styles.socialMediaIconsStyle}>
						<TouchableOpacity>
							<Icon 
								name="youtube-square" 
								type="font-awesome"
								color="#fff"
								size={70}
							/>
						</TouchableOpacity>
						<TouchableOpacity onPress={() => Linking.openURL(testURL)}>
							<Icon 
								name="soundcloud" 
								type="font-awesome"
								color="#fff"
								size={70}
							/>
						</TouchableOpacity>
						<TouchableOpacity>
							<Icon 
								name="vine" 
								type="font-awesome"
								color="#fff"
								size={70}
							/>
						</TouchableOpacity>
					</View>
				</View>
				<TouchableOpacity style={styles.buttonStyle} onPress={() => Linking.openURL(buyTicketsTestURL)}>
					<Text style={{color: "#fff"}}>Buy Tickets</Text>
				</TouchableOpacity>
			</LinearGradient>
		); 
	}
}
// background-image: linear-gradient(to right bottom, #010812, #222246, #67286b, #b90e6e, #fe0b4c);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'space-between',
		backgroundColor: 'black'
	},
	venueInfoStyle: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		margin: 10
	},
	venueBox1: {
		width:  175,
		height: 100,
		backgroundColor: 'black',
		justifyContent: 'center',
		alignItems: 'center'
	},
	venueBox2: {
		width: 150,
		height: 100,
		backgroundColor: 'black',
		justifyContent: 'center',
		alignItems: 'center'
	},
	venueArtistInfoStyle: {
		height: 175, 
		flexDirection: 'row',
		justifyContent: 'space-between',
		margin: 10,
		borderWidth: 2,
		backgroundColor: 'black'
	},
	socialMediaIconsStyle: {
		width: '100%',
		justifyContent: 'space-between',
		alignItems: 'center',
		flexDirection: 'row',
		padding: 15
	},
	buttonStyle: {
		height: 75,
		margin: 10,
		borderWidth: 3,
		borderColor: 'white',
		borderRadius: 15,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 5,
		backgroundColor: 'black'
	},
	textStyle: {
		color: '#fff' 
	}
});



export default EventVenueInfoScreen;