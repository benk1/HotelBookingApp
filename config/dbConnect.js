import mongoose from 'mongoose';

const dbConnect = () => {
	if (mongoose.connection.readyState >= 1) {
		return;
	}

	mongoose.connect(
		process.env.DB_URI,
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

export default dbConnect;
