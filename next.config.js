const path = require('path');

const { PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_BUILD } = require('next/constants');

const withPlugins = require('next-compose-plugins');
const reactSvg = require('next-react-svg');
const pwa = require('next-pwa');

module.exports = withPlugins(
	[
		[
			reactSvg,
			{
				include: path.resolve(__dirname, 'images'),
			},
			[PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_BUILD],
		],
		[pwa],
	],
	{
		pwa: {
			basePath: '/eventos/2020/arteempecas', 
			disable: process.env.NODE_ENV !== 'production',
			dest: 'public',
		},
	},
);
