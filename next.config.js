/** @type {import('next').NextConfig} */
// (DB_URI = 'mongodb://localhost:27017/bookit'),
const nextConfig = {
	reactStrictMode: true,
	env: {
		DB_URI: 'mongodb://localhost:27017/bookit',
	},
};

module.exports = nextConfig;

// module.exports = {
// 	env: {
// 		DB_URI: 'mongodb://localhost:27017/bookit',
// 	},
// };
