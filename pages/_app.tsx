import '../styles/globals.css';

import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import type { AppProps /*, AppContext */ } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<React.Fragment>
			<CssBaseline />
			<Component {...pageProps} />
		</React.Fragment>
	);
}

export default MyApp;
