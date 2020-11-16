import '../styles/globals.css';

import 'leaflet.locatecontrol/dist/L.Control.Locate.min.css';

import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import type { AppProps /*, AppContext */ } from 'next/app';

import Div100vh from 'react-div-100vh';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<React.Fragment>
			<CssBaseline />
			<Div100vh>
				<Component {...pageProps} />
			</Div100vh>
		</React.Fragment>
	);
}

export default MyApp;
