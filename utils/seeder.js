const Room = require('../models/room');
// import Room from '../models/room';
const mongoose = require('mongoose');

const dbConnect = require('../config/dbConnect');

const rooms = require('../data/rooms');
// import rooms from '../data/rooms.json';

dbConnect();

// mongoose.connect(
// 	// 'mongodb+srv://ghulamabbas_bookit:bookit258@bookit.ghtfw.mongodb.net/bookit?retryWrites=true&w=majority',
// 	'mongodb://localhost:27017/bookit',
// 	{
// 		useNewUrlParser: true,
// 		useUnifiedTopology: true,
// 		// useFindAndModify: false,
// 		// useCreateIndex: true,
// 	}
// );

const seedRooms = async () => {
	try {
		await Room.deleteMany();
		console.log('Rooms are deleted');

		await Room.insertMany(rooms);
		console.log('All Rooms are added.');

		process.exit();
	} catch (error) {
		console.log(error.message);
		process.exit();
	}
};

seedRooms();
