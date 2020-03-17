const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

const pointSchema = new mongoose.Schema({
	type: {
		type: String,
		enum: ["Point"], //must be Point
		required: true,
	},
	coordinates: {
		type: [Number],
		required: true,
	},
});

module.exports = pointSchema;

// const location = new mongoose.Schema({
// 	name: String,
// 	location: {
// 		type: pointSchema,
// 		required: true,
// 	},
// });



// {
// 	location: {
// 		$geoWithin: {
// 			$centerSphere: [
// 				[-75.02140493430947, 42.34082056869081],
// 				0.07448431611494157,
// 			];
// 		}
// 	}
// };

// {location: {$geoWithin: { $geometry: { type: 'Polygon', coordinates: [ [ [ -73.9988667541371, 40.771153781080606 ], [ -74.01064870519018, 40.73625436434041 ], [ -73.9809374647583, 40.72161754403527 ], [ -73.96078546964428, 40.7517803519712 ], [ -73.9417045609896, 40.7788471158644 ], [ -73.92983939269281, 40.797379800965444 ], [ -73.96523356554196, 40.808565577859056 ], [ -73.9988667541371, 40.771153781080606 ] ] ] }}}}

// {location: {$geoWithin: { $centerSphere: [ [ -72.77256877805387, 41.612443266624624 ], 0.000086764759682692 ]}}}
