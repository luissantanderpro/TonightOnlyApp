// Imported Modules 
// -------------------------------------------------
import React, { Component }   from 'react'; 
import { View, 
		 Text, 
		 TouchableOpacity,
		 StyleSheet,
		 Dimensions,
		 ScrollView, 
		 Image
	   }         			   from 'react-native'; 
import ImageSlider             from 'react-native-image-slider';
import LinearGradient          from 'react-native-linear-gradient';


// Get the Device Screen Dimensions 
const SCREEN_WIDTH = Dimensions.get('window').width; 


////////////////////////////////////////////////////////////////////////////////////////
// Code used for testing until we can establish backend stuff 
// Test Temp Images 
const tempImages = [
	require('../assets/events1.jpg'),
	'https://placeimg.com/640/640/nature'
]
// Test Array 
const tempTestArray = [{one: 1, two: 2}, {one: 3, two: 4}, {one: 5, two: 6}, {one: 7, two: 8}, {one: 9, two: 10}];
const tempVenueImages = [
	require('../assets/exla.jpg'),
	require('../assets/academyla.jpeg') 
]


const tempArtistImages = [
	require('../assets/artist1.jpg'),
	require('../assets/artist2.jpg') 
]; 

////////////////////////////////////////////////////////////////////////////////////////

class CityEventsScreen extends Component {

	static navigationOptions = ({ navigation }) => ({
		title: navigation.getParam('headerTitle') + ' Events',
				headerStyle: {
			backgroundColor: 'black'
		},
		headerTitleStyle: {
			color: '#fff'
		}
	})

	state = {
		venueArtistToggle: false 
	}

	// Navigate to Either Venue Info or Artist in Town 
	onButtonTilePress = (choice) => {
		const { navigate } = this.props.navigation; 

		if (choice === 'Artist')
			navigate('artistInfo');
		else
			navigate('venueInfo'); 
	}

	// Render Each Individual Venue Tile 
	renderIndivdualVenueTile = () => {
		return tempTestArray.map((item, i) => {
			return (
				<View key={i} style={styles.scrollViewIndividualContainer}>
					<TouchableOpacity style={styles.scrollTileLeft} onPress={() => this.onButtonTilePress('Venue')}>
						<Image source={tempVenueImages[ 0 ]} style={{width: '100%', height: '100%'}}/>
					</TouchableOpacity>
					<TouchableOpacity style={styles.scrollTileRight}>
						<Image source={tempVenueImages[ 1 ]} style={{width: '100%', height: '100%'}}/>
					</TouchableOpacity>
				</View>
			);
		});
	}

	// Render Each Individual Whos In Town Tile 
	renderIndivdualArtistTile = () => {
		return tempTestArray.map((item, i) => {
			return (
				<View key={i} style={styles.scrollViewIndividualContainer}>
					<TouchableOpacity style={styles.scrollTileLeft} onPress={() => this.onButtonTilePress('Artist')}>
						<Image source={tempArtistImages[ 0 ]} style={{width: '100%', height: '100%'}}/>
					</TouchableOpacity>
					<TouchableOpacity style={styles.scrollTileRight}>
						<Image source={tempArtistImages[ 1 ]} style={{width: '100%', height: '100%'}}/>
					</TouchableOpacity>
				</View>
			);
		});	
	}
	
	// What to Render to the User Helper Function. 
	selectedRenderedDisplay = () => {
		if (this.state.venueArtistToggle)
			return this.renderIndivdualArtistTile(); 
		else
			return this.renderIndivdualVenueTile(); 
	}

	// Tile Selection 
	onSelectionButtonPress = (choice) => {
		this.setState({venueArtistToggle: choice}); 
	}

	render() {

		// Render The Tiles 
		const tiles = this.selectedRenderedDisplay();

		// Return 
		return (
			<LinearGradient 
				colors={['#010812', '#222246', '#67286b', '#b90e6e', '#fe0b4c']} 
				start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
				style={ styles.container } >
				<View style={styles.venueArtistButtonsContainer}>
					<TouchableOpacity style={styles.venueArtistButtonLeft} onPress={() => this.onSelectionButtonPress(false)}>
						<Text>Venues</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.venueArtistButtonRight} onPress={() => this.onSelectionButtonPress(true)}>
						<Text>Whos in Town</Text>
					</TouchableOpacity>
				</View>
				<ScrollView style={styles.scrollViewTilesContainer}>
					{ tiles }
				</ScrollView>
			</LinearGradient>
		); 
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'space-between'
	},
	venueArtistButtonsContainer: {
		height: 50, 
		margin: 10,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center'
	},
	venueArtistButtonLeft: {
		height: 40,
		width: 120,
		borderRadius: 5,
		borderWidth: 2,
		borderColor: 'black',
		backgroundColor: '#fff',
		marginRight: 50,
		justifyContent: 'center',
		alignItems: 'center'
	},
	venueArtistButtonRight: {
		height: 40,
		width: 120,
		borderRadius: 5,
		borderWidth: 2,
		backgroundColor: '#fff',
		borderColor: 'black',
		justifyContent: 'center',
		alignItems: 'center'
	},
	scrollViewTilesContainer: {
		margin: 10
	},
	scrollViewIndividualContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		marginBottom: 5 
	},
	scrollTileLeft: {
		height: 100,
		width: 120,
		borderRadius: 5,
		borderWidth: 2,
		borderColor: 'black',
		backgroundColor: '#fff',
		justifyContent: 'center',
		alignItems: 'center',
		marginRight: 50
	},
	scrollTileRight: {
		height: 100,
		width: 120,
		borderRadius: 5,
		borderWidth: 2,
		borderColor: 'black',
		backgroundColor: '#fff',
		justifyContent: 'center',
		alignItems: 'center'
	},
	leftAlignment: {
		marginRight: 50, 
	}
});



export default CityEventsScreen;