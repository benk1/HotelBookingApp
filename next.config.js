//  @type {import('next').NextConfig}
// (DB_URI = 'mongodb://localhost:27017/bookit'),
module.exports = {
	reactStrictMode: true,
	env: {
		DB_URI: 'mongodb://localhost:27017/bookit',

		STRIPE_API_KEY: '',
		STRIPE_SECRET_KEY: '',

		STRIPE_WEBHOOK_SECRET: '',

		CLOUDINARY_CLOUD_NAME: '',
		CLOUDINARY_API_KEY: '',
		CLOUDINARY_API_SECRET: '',

		SMTP_HOST: '',
		SMTP_PORT: '',
		SMTP_USER: '',
		SMTP_PASSWORD: '',
		SMTP_FROM_EMAIL: '',
		SMTP_FROM_NAME: '',

		NEXTAUTH_URL: '',
	},
	images: {
		domains: ['res.cloudinary.com', 'a0.muscache.com'],
		// path: 'https://a0.muscache.com',
	},
};

// module.exports = nextConfig;

// module.exports = {
// 	env: {
// 		DB_URI: 'mongodb://localhost:27017/bookit',
// 	},
// };
