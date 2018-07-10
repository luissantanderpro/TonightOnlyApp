// Imported Modules 
// -------------------------------------------------
import React, { Component }   from 'react'; 
import { View, 
		 Text, 
		 TouchableOpacity,
		 StyleSheet,
		 Dimensions,
		 Image,
		 ImageBackground }     from 'react-native'; 
import ImageSlider             from 'react-native-image-slider';

const SCREEN_WIDTH = Dimensions.get('window').width; 

const events = [
	require('../assets/events1.jpg'),
	require('../assets/events2.png'),
	require('../assets/events3.png')
]

class MainScreen extends Component {
	static navigationOptions = {
		title: 'Tonight Only Main',
		headerStyle: {
			backgroundColor: 'black'
		},
		headerTitleStyle: {
			color: '#fff'
		}
	};

	onButtonCityPress = (choice) => {
		const { navigate } = this.props.navigation; 
		
		// Navigate to the next 
		switch (choice) {
			case 'allEvents':
				navigate('allEvents', { headerTitle: 'All Events' });
			break;
			default:
				navigate('cityEvents', { headerTitle: choice }); 
			break;
		}
	}	

	render() {
		return (
			<View style={ styles.container } >
				<ImageSlider 
					loopBothSides
					autoPlayWithInterval={3000}
					images={events}/>
				<View style={ styles.btncontainer } >
					<TouchableOpacity style={styles.buttons} onPress={() => this.onButtonCityPress('allEvents')}>
						<ImageBackground source={require('../assets/all_events.jpg')} style={styles.cityButtons}>
							<Text style={{color: "#fff"}} >All Events</Text>
						</ImageBackground>
					</TouchableOpacity>
					<TouchableOpacity style={styles.buttons} onPress={() => this.onButtonCityPress('Los Angeles')}>
						<ImageBackground source={require('../assets/los_angeles.jpg')} style={styles.cityButtons}>
							<Text style={{color: "#fff"}} >Los Angeles</Text>
						</ImageBackground>
					</TouchableOpacity>
					<TouchableOpacity style={styles.buttons} onPress={() => this.onButtonCityPress('San Francisco')}>
						<ImageBackground source={require('../assets/san_francisco.jpg')} style={styles.cityButtons}>
							<Text style={{color: "#fff"}} >San Francisco</Text>
						</ImageBackground>
					</TouchableOpacity>
					<TouchableOpacity style={styles.buttons} onPress={() => this.onButtonCityPress('San Diego')}>
						<ImageBackground source={require('../assets/san_diego.jpg')} style={styles.cityButtons}>
							<Text style={{color: "#fff"}} >San Diego</Text>
						</ImageBackground>
					</TouchableOpacity>

				</View>
			</View>
		); 
	}
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'space-between',
		backgroundColor: 'black'
	},
	btncontainer: {
		width: SCREEN_WIDTH
	},
	cityButtons: {
		width: SCREEN_WIDTH - 5,
		height: 100,
		justifyContent: 'center',
		alignItems: 'center'
	},
	buttons: {
		alignItems: 'center',
		backgroundColor: 'red',
		alignItems: 'center',
		justifyContent: 'center',
		margin: 3,
		borderWidth: 1,
		borderRadius: 5
	}
});



export default MainScreen; 