const path = require('path');

const { PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_BUILD } = require('next/constants');

const withPlugins = require('next-compose-plugins');
const reactSvg = require('next-react-svg');
const pwa = require('next-pwa');

// next.js configuration
const nextConfig = {};

module.exports = withPlugins(
	[
		[
			reactSvg,
			{
				include: path.resolve(__dirname, 'src/assets/images'),
			},
			[PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_BUILD],
		],
		[
			pwa,
			{
				pwa: {
					dest: 'public',
				},
			},
			[PHASE_PRODUCTION_BUILD],
		],
	],
	nextConfig,
);
