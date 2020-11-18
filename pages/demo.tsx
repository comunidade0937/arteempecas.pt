import Head from 'next/head';

import dynamic from 'next/dynamic';

import QRCode from 'qrcode.react';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';

import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { MyMarker } from '../components/map/Map';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		container: {
			['@media screen']: {
				padding: '1em',
				display: 'grid',
				gridAutoFlow: 'row',
				gridGap: '5em',
			},
		},

		section: {
			['@media print']: {
				pageBreakAfter: 'always',
			},
		},

		avatar: {
			color: theme.palette.getContrastText('#098b81'),
			backgroundColor: '#098b81',
		},
	}),
);

type MapProps = {
	markers?: Array<MyMarker>;
};

export default function Demo({ markers }: InferGetStaticPropsType<typeof getStaticProps>) {
	const classes = useStyles();

	return (
		<div className={classes.container}>
			<Head>
				<title>Arte em Peças 2020</title>
			</Head>
			{markers?.map((marker, i) => (
				<div key={i} className={classes.section}>
					<Box display="flex" alignItems="center">
						<Avatar className={classes.avatar}>{marker?.id}</Avatar>
						<Box ml={2}>
							<h2>{marker?.name}</h2>
						</Box>
					</Box>

					<QRCode value={`https://arteempecas-pt.vercel.app/map?m=${marker.id}`} renderAs="svg" />
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
