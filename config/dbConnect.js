// import mongoose from 'mongoose';
const mongoose = require('mongoose');

const dbConnect = () => {
	if (mongoose.connection.readyState >= 1) {
		return;
	}

	console.log(process.env.DB_URI);
	mongoose.connect(
		'mongodb://localhost:27017/bookit',
		{
			useNewUrlParser: true,
			useUnifiedTopology: true,
		},
		(err) => {
			if (err) throw err;
			console.log('Connected to local database.');
		}
	);
};

// export default dbConnect;
module.exports = dbConnect;
