import classnames from 'classnames';

import QRCode from 'qrcode.react';

import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { MyMarker } from '../components/map/Map';

import styles from '../styles/demo.module.css';

import Logo from '../images/logo-aep-2020.svg';

type MapProps = {
	markers?: Array<MyMarker>;
};

export default function Demo({ markers }: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<div className={styles.container}>
			{markers?.map((marker, i) => (
				<div key={i} className={styles.section}>
					{/* <h2>{marker?.name}</h2> */}
					<div className={styles.gridContainer}>
						<div className={styles.gridLeft}>
							<QRCode className={styles.qrcode} value={`https://arteempecas.pt/map?m=${marker.id}`} renderAs="svg" />
						</div>
						<div className={styles.gridMiddle}>
							<div className={styles.middleCircle}>
								<span className={styles.middleCircleNumber}>{marker.flyer}</span>
								<span className={styles.middleCircleText}>{marker.name}</span>
							</div>
						</div>
						<div className={styles.gridRight}>
							<Logo className={styles.logo} />
						</div>
						<div className={classnames(styles.gridBottom, styles.bottomInfo)}>{marker.description}</div>
					</div>
				</div>
			))}
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
