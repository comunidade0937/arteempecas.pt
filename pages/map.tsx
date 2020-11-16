import Head from 'next/head';

import dynamic from 'next/dynamic';

import { BottomBar } from '../components';

import layout from '../styles/Layout.module.css';
import styles from '../styles/Map.module.css';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { MyMarker } from '../components/map/Map';

const DynamicComponentWithNoSSR = dynamic(() => import('../components/map/Map'), { ssr: false });

type MapProps = {
	markers?: Array<MyMarker>;
};

export default function Map({ markers }: InferGetStaticPropsType<typeof getStaticProps>) {
	// const markers = await fetchData();

	return (
		<div className={layout.container}>
			<Head>
				<title>Arte em Peças 2020</title>
				<link rel="icon" href="/favicon.ico" />
				<link
					rel="stylesheet"
					href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
					integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
					crossOrigin=""
				/>
			</Head>
			<div className={layout.mainFullScreen}>
				<DynamicComponentWithNoSSR markers={markers} />
			</div>
			<div className={layout.footer}>
				<BottomBar activeAction={1} />
			</div>
		</div>
	);
}

export const getStaticProps: GetStaticProps<MapProps> = async (context) => {
	const data = await import('../public/markers.json');

	const markers: Array<MyMarker> = data.default as Array<MyMarker>;

	return {
		props: {
			markers,
		},
	};
};
