const axios = require('axios');

module.exports.getAddressCoordinate = async (address) => {
	const apiKey = process.env.GOOGLE_MAPS_API;
	const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apiKey}`;
	try {
		const response = await axios.get(url);
		const results = response.data.results;
		if (results && results.length > 0) {
			const location = results[0].geometry.location;
			return {
				ltd: location.lat,
				lang: location.lng
			};
		} else {
			throw new Error('No results found for the given address');
		}
	} catch (error) {
		throw new Error('Failed to fetch coordinates: ' + error.message);
	}
};

module.exports.getDistanceAndTime = async (origin, destination) => {
	if (!origin || !destination) {
		throw new Error("origin and destination are required");
	}
	const apiKey = process.env.GOOGLE_MAPS_API;
	const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${encodeURIComponent(origin)}&destinations=${encodeURIComponent(destination)}&key=${apiKey}`;
	try {
		const response = await axios.get(url);
		if (response.data.status !== 'OK') {
			if (response.data.rows[0].elements[0].status === 'ZERO_RESULTS') {
				throw new Error("No route found between the specified locations");
			}
			throw new Error("Distance Matrix API error");
		}
		const { distance, duration } = response.data.rows[0].elements[0];
		return { distance, duration };
	} catch (error) {
		throw new Error("Distance and time not found");
	}
};

module.exports.getAutoCompleteSuggestions = async (input) => {
	if (!input) {
		throw new Error("Input is required");
	}
	const apiKey = process.env.GOOGLE_MAPS_API;
	const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${encodeURIComponent(input)}&key=${apiKey}`;
	try {
		const response = await axios.get(url);
		if (response.data.status === 'OK') {
			return response.data.predictions;
		} else {
			throw new Error("Failed to fetch suggestions");
		}
	} catch (error) {
		console.error(error);
		throw new Error(error.message || 'Server error');
	}
}

