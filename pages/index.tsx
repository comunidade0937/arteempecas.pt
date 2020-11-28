import React from 'react';

import classnames from 'classnames';

import Head from 'next/head';

import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import { BottomBar } from '../components';

import layout from '../styles/Layout.module.css';
import styles from '../styles/Home.module.css';

import Logo from '../images/logo-aep-2020.svg';

export default function Home() {
	return (
		<div className={layout.container}>
			<Head>
				<title>Arte em Peças 2020</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div className={layout.main}>
				<div className={styles.cover}>
					<div></div>
					<Logo className={styles.logo} />
					<div className={styles.coverBottom}>
						<KeyboardArrowDownIcon className={styles.swipeDown}></KeyboardArrowDownIcon>
					</div>
				</div>
				<div className={styles.section}>
					<Container maxWidth="sm">
						<Typography variant="h2" gutterBottom>
							Data e Horário
						</Typography>

						<Typography variant="body1" gutterBottom>
							body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
							neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
						</Typography>

						<Typography variant="h2" gutterBottom>
							Localização
						</Typography>
					</Container>
					<Box bgcolor="text.secondary" color="background.paper" textAlign="center">
						<Container maxWidth="sm">
							<p>
								Feito com
								<FavoriteIcon className={styles.heart} titleAccess="amor" color="secondary" />
								pela
								<a target="_blank" rel="noopener" href="https://comunidade0937.com">
									Comunidade 0937
								</a>
								.
							</p>
							<p>LEGO® é uma marca registada da LEGO Group, que não patrocina nem apoia esta página.</p>
						</Container>
					</Box>
				</div>
			</div>

			<div className={classnames(layout.footer, layout.footerSticky)}>
				<BottomBar activeAction={0} />
			</div>
		</div>
	);
}
