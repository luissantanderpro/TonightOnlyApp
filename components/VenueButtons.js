import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native'; 

// Button Controls for the Venue Screen but will possibly turn into UI master compenents 
const VenueButton = ({ title, func }) => (
	<TouchableOpacity style={styles.button} onPress={() => func(title)} >
		<Text>{title}</Text>
	</TouchableOpacity>
); 

const styles = StyleSheet.create({
	button: {
		height: 40,
		width: '30%',
		borderRadius: 5,
		borderWidth: 2,
		backgroundColor: '#fff',
		borderColor: 'black',
		justifyContent: 'center',
		alignItems: 'center',
		margin: 5
	}
});

export default VenueButton; 