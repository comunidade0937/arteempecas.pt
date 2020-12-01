import { Component } from 'react';

import { useRouter } from 'next/router';

import QrReader from 'react-qr-reader';

export default function MyQrReader() {
	const router = useRouter();

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
	const handleError = (err: any) => {
		console.error(err);
	};

	return <QrReader delay={300} onError={handleError} onScan={handleScan} style={{ width: '100%', maxWidth: '600px' }} />;
}
