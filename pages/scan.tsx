import Head from 'next/head';
import dynamic from 'next/dynamic';

import { GetStaticProps, InferGetStaticPropsType } from 'next';

import { MyMarker } from '../components/map/Map';
import { BottomBar } from '../components';

import layout from '../styles/Layout.module.css';

type MapProps = {
	markers?: Array<MyMarker>;
};

const DynamicComponentWithNoSSR = dynamic(() => import('../components/qr-reader/qr-reader'), { ssr: false });

export default function Demo({ markers }: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<div className={layout.container}>
			<Head>
				<title>Arte em Peças 2020</title>
			</Head>

			<div className={layout.mainFullScreen}>
				<DynamicComponentWithNoSSR />
			</div>

			<div className={layout.footer}>
				<BottomBar activeAction={2} />
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
