import Head from 'next/head';
import dynamic from 'next/dynamic';

import { GetStaticProps, InferGetStaticPropsType } from 'next';

import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import { MyMarker } from '../components/map/Map';
import { BottomBar } from '../components';

import layout from '../styles/Layout.module.css';

type MapProps = {
	markers?: Array<MyMarker>;
};

const DynamicQRReader = dynamic(() => import('../components/qr-reader/qr-reader'), { ssr: false });

export default function Demo({ markers }: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<div className={layout.container}>
			<Head>
				<title>Arte em Peças 2020</title>
			</Head>

			<div className={layout.mainFullScreen}>
				<Box display="flex" alignItems="center" justifyContent="center" mb={2}>
					<DynamicQRReader />
				</Box>
				<Container maxWidth="sm">
					<Typography variant="body1" align="center" paragraph>
						Utiliza a câmara do teu Smartphone para ler os QR Codes junto às construções.
					</Typography>
				</Container>
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
