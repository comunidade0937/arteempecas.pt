import React from 'react';

import classnames from 'classnames';

import Head from 'next/head';

import { BottomBar } from '../components';

import layout from '../styles/Layout.module.css';
import styles from '../styles/Home.module.css';

import Logo from '../images/logo-aep-2020.svg';

import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

export default function Home() {
	const [value, setValue] = React.useState(0);

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
				<div className={styles.section}></div>
			</div>

			<div className={classnames(layout.footer, layout.footerSticky)}>
				<BottomBar activeAction={0} />
			</div>
		</div>
	);
}
