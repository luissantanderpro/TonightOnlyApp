// Imported Modules 
// -------------------------------------------------
import React, { Component }   from 'react'; 
import { View, 
		 Text, 
		 TouchableOpacity,
		 StyleSheet,
		 Dimensions,
	   }         			   from 'react-native'; 
import ImageSlider             from 'react-native-image-slider';


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
			<View style={ styles.container } >
				<ImageSlider 
					loopBothSides
					autoPlayWithInterval={3000}
					images={tempImages}
				/>
				<View style={styles.venueInfoStyle}>
					<View style={styles.venueBox1}>
						<Text>Box 1</Text>
					</View>
					<View style={styles.venueBox2}>
						<Text>Box 2</Text>
					</View>
				</View>
				<View style={styles.venueArtistInfoStyle}>
					<Text>Internal Info</Text>
				</View>
				<TouchableOpacity style={styles.buttonStyle} onPress={() => {}}>
					<Text style={{color: "#fff"}}>Buy Tickets</Text>
				</TouchableOpacity>
			</View>
		); 
	}
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'space-between',
		backgroundColor: 'white'
	},
	venueInfoStyle: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		margin: 10,
		borderWidth: 2,
		borderColor: 'red' 
	},
	venueBox1: {
		width:  175,
		height: 100,
		backgroundColor: 'pink'
	},
	venueBox2: {
		width: 150,
		height: 100,
		backgroundColor: 'blue'
	},
	venueArtistInfoStyle: {
		height: 175, 
		flexDirection: 'row',
		justifyContent: 'space-between',
		margin: 10,
		borderWidth: 2,
		borderColor: 'red'
	},
	buttonStyle: {
		height: 75,
		margin: 10,
		borderWidth: 3,
		borderColor: 'white',
		borderRadius: 5,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 5,
		backgroundColor: 'black'
	}
});



export default EventVenueInfoScreen;