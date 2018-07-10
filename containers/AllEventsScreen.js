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



class AllEventsScreen extends Component {
	static navigationOptions = ({ navigation }) => ({
		title: navigation.getParam('headerTitle'),
				headerStyle: {
			backgroundColor: 'black'
		},
		headerTitleStyle: {
			color: '#fff'
		}
	})

	onEventButtonPress = (eventIndex, event) => {
		const { navigate } = this.props.navigation; 
		navigate('eventInfo', { eventIndex, event });
	}

	render() {

		// Creates a Card with the Specified Month and List of Events by All or Festival
		const events = listOfEvents.map((item, index) => {

			const infoCalendarListItems = item.info.map((info, i) => {
				return (
					<ListItem 
						key={i}
						dataChosen={{index, i}}
						title={info} 
						titleStyle={{fontSize: 13}} 
						onPressRightIcon={() => this.onEventButtonPress(index, i)} 
					/>
				);
			})

			return (
				<Card title={item.month} key={index} >
					<List>
						{infoCalendarListItems}
					</List>
				</Card>
			);
		})



		return (
			<ScrollView style={styles.container}>
				<View>
					{/*<Button title="All" />*/}
				</View>
				{ events }
			</ScrollView>
		); 
	}
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'purple'
	}
});



export default AllEventsScreen; 