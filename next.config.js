/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: [
			'images.prismic.io',
			'fmic.gov.ng',
			'i.onthe.io',
			'www.globalpartnership.org',
			'images.unsplash.com',
		],
	},
}

module.exports = nextConfig
