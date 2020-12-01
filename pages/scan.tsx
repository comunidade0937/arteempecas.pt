import Head from 'next/head';
import dynamic from 'next/dynamic';

import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import { BottomBar } from '../components';

import layout from '../styles/Layout.module.css';

const DynamicQRReader = dynamic(() => import('../components/qr-reader/qr-reader'), { ssr: false });

export default function Demo() {
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
