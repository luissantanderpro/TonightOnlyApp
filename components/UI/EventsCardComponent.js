// Imported Modules 
// -------------------------------------------------
import React, { Component }   from 'react'; 
import { Card,
		 List,
		 ListItem } 		  from 'react-native-elements'; 
import { Text }               from 'react-native'; 

class EventsCardCalendar extends Component {

	render() {

		const renderedListEvents = this.props.events.map((event, i) => {
			return (
				<ListItem 
					key={i}
					title={event} 
					titleStyle={{fontSize: 13}} 
					onPress={() => this.props.onEventButtonPress(this.props.eventMonthIndex, i)}
					onPressRightIcon={() => this.props.onEventButtonPress(this.props.eventMonthIndex, i)}
				/>
			);
		})

		return (
			<Card title={this.props.month}>
				<List>
					{ renderedListEvents }
				</List>
			</Card>
		);
	}
}


export default EventsCardCalendar; 