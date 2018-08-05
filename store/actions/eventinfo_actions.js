import axios from 'axios'; 
import { FETCH_VENUE_EVENTS, FETCH_VENUE_INFO } from './types'; 


// Get events from a specific venue id. 
export const fetchAllSelectedVenueEvents = (venueId) => async dispatch => {
	try {

		let { data } = await axios.post('http://localhost:3000/get_venue_events', {venueId});

		dispatch({ type: FETCH_VENUE_EVENTS, venueEvents: data.venueEvents });
		dispatch({ type: FETCH_VENUE_INFO,   venueInfo:   data.venueInfo });

	} catch (err) {
		console.log(err); 
	}
}