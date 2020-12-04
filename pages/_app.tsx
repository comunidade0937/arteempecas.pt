import '../styles/globals.css';

import 'leaflet.locatecontrol/dist/L.Control.Locate.min.css';

import React, { useEffect } from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';

import type { AppProps /*, AppContext */ } from 'next/app';
import { useRouter } from 'next/router';

import Div100vh from 'react-div-100vh';
import Head from 'next/head';

import { GA_TRACKING_ID } from '../lib/gtag';

import { pageview } from '../lib/gtag';

function MyApp({ Component, pageProps }: AppProps) {
	const router = useRouter();
	useEffect(() => {
		const handleRouteChange = (url: string) => {
			pageview(url);
		};

		router.events.on('routeChangeComplete', handleRouteChange);

		return () => {
			router.events.off('routeChangeComplete', handleRouteChange);
		};
	}, [router.events]);

	return (
		<React.Fragment>
			<CssBaseline />
			<Head>
				<title>Arte em Peças 2020</title>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="theme-color" content="#be1622" />
				<link rel="manifest" href="manifest.json" />
				<link rel="icon" href="/favicon.ico" />

				<script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
				<script
					dangerouslySetInnerHTML={{
						__html: `
							window.dataLayer = window.dataLayer || [];
							function gtag(){dataLayer.push(arguments);}
							gtag('js', new Date());
							gtag('config', '${GA_TRACKING_ID}', {
							page_path: window.location.pathname,
							});
						`,
					}}
				/>
			</Head>
			<Div100vh>
				<Component {...pageProps} />
			</Div100vh>
		</React.Fragment>
	);
}

export default MyApp;
