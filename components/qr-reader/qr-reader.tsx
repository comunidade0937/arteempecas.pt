import { Component, useState } from 'react';

import { useRouter } from 'next/router';

import QrReader from 'react-qr-reader';

import LinearProgress from '@material-ui/core/LinearProgress';

export default function MyQrReader() {
	const router = useRouter();
	const [loaded, setLoaded] = useState<boolean>(false);

	const handleScan = (data: any) => {
		if (data) {
			const pattern = /map\?m=(\w+)$/i;

			const result = pattern.exec(data);

			if (result) {
				router.push({
					pathname: '/map',
					query: {
						m: result[1],
					},
				});
			}
		}
	};
	const handleLoad = () => {
		setLoaded(true);
	};
	const handleError = (err: any) => {
		console.error(err);
	};

	return (
		<>
			<QrReader delay={300} onError={handleError} onLoad={handleLoad} onScan={handleScan} style={{ width: '100%', maxWidth: '600px' }} />
			{!loaded && <LinearProgress />}
		</>
	);
}
