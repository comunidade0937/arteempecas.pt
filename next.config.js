const path = require('path');

const { PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_BUILD } = require('next/constants');

const withPlugins = require('next-compose-plugins');
const reactSvg = require('next-react-svg');

// module.exports = withPlugins([
//     withSvgr
//     // your other plugins here
//   ]);

module.exports = withPlugins([[reactSvg, { include: path.resolve(__dirname, 'images') }, [PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_BUILD]]], {
	//basePath: '/tito/aep2020',
	// trailingSlash: true,
});

// module.exports = reactSvg({
// 	include: path.resolve(__dirname, 'images'),
// 	webpack(config, options) {
// 		return config;
// 	},
// });
