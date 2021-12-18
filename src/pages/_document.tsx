import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';
import { ColorModeScript } from '@chakra-ui/react';

import { GA_TRACKING_ID } from '../lib/gtag';

export default class Document extends NextDocument {
	render() {
		return (
			<Html>
				<Head />
				<body>
					<ColorModeScript />
					<Main />
					<NextScript />
					<Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} strategy="afterInteractive" />
					<Script id="google-analytics" strategy="afterInteractive">
						{`
							window.dataLayer = window.dataLayer || [];
							function gtag(){window.dataLayer.push(arguments);}
							gtag('js', new Date());

							gtag('config', '${GA_TRACKING_ID}', {
								page_path: window.location.pathname,
							});
						`}
					</Script>
				</body>
			</Html>
		);
	}
}
