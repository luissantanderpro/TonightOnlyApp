// Imported Modules 
// -------------------------------------------------
import React, { Component }   from 'react'; 
import { View, 
		 Text, 
		 TouchableOpacity,
		 StyleSheet,
		 Dimensions,
		 ScrollView
	   }         			   from 'react-native'; 
import ImageSlider             from 'react-native-image-slider';

// Get the Device Screen Dimensions 
const SCREEN_WIDTH = Dimensions.get('window').width; 

// Test Temp Images 
const tempImages = [
	require('../assets/events1.jpg'),
	'https://placeimg.com/640/640/nature'
]
// Test Array 
const tempTestArray = [{one: 1, two: 2}, {one: 3, two: 4}, {one: 5, two: 6}, {one: 7, two: 8}, {one: 9, two: 10}];


class CityEventsScreen extends Component {
	static navigationOptions = ({ navigation }) => ({
		title: navigation.getParam('headerTitle'),
				headerStyle: {
			backgroundColor: 'black'
		},
		headerTitleStyle: {
			color: '#fff'
		}
	})

	render() {

		// Render Each Individual Tile 
		const tiles = tempTestArray.map((item, i) => {
			return (
				<View key={i} style={styles.scrollViewIndividualContainer}>
					<TouchableOpacity style={styles.scrollTileLeft}>
						<Text>{item.one}</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.scrollTileRight}>
						<Text>{item.two}</Text>
					</TouchableOpacity>
				</View>
			);
		});
		// Return 
		return (
			<View style={ styles.container } >
				<View style={styles.venueArtistButtonsContainer}>
					<TouchableOpacity style={styles.venueArtistButtonLeft}>
						<Text>Venues</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.venueArtistButtonRight}>
						<Text>Artists in Town</Text>
					</TouchableOpacity>
				</View>
				<ScrollView style={styles.scrollViewTilesContainer}>
					{ tiles }
				</ScrollView>
			</View>
		); 
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'space-between',
		backgroundColor: 'pink'
	},
	venueArtistButtonsContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		margin: 10,
		borderWidth: 2,
		borderColor: 'red',
		height: 50 
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
		margin: 10,
		borderWidth: 2,
		borderColor: 'red'	
	},
	scrollViewIndividualContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		borderWidth: 2,
		borderColor: 'blue',
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