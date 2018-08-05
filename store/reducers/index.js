import { FETCH_VENUE_EVENTS, FETCH_VENUE_INFO } from '../actions/types'; 


const initialState = {
	venueEvents: [],
	venueInfo: {}
}


export default function(state = initialState, action) {
	switch (action.type) {
		case FETCH_VENUE_EVENTS:
			return {
				...state,
				venueEvents: action.venueEvents
			};
		case FETCH_VENUE_INFO:
			return {
				...state,
				venueInfo: action.venueInfo
			};
		default:
			return {
				...state 
			};
	}
};