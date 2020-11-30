import '../styles/globals.css';

import 'leaflet.locatecontrol/dist/L.Control.Locate.min.css';

import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import type { AppProps /*, AppContext */ } from 'next/app';

import Div100vh from 'react-div-100vh';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<React.Fragment>
			<CssBaseline />
			<Head>
				<title>Arte em Peças 2020</title>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="theme-color" content="#be1622" />
				<link rel="manifest" href="manifest.json" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Div100vh>
				<Component {...pageProps} />
			</Div100vh>
		</React.Fragment>
	);
}

export default MyApp;
