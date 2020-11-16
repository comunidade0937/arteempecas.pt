import { ChangeEvent } from 'react';
import { useRouter } from 'next/router';
import Link from '../link/Link';

import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import { Home, Map, LocationOn } from '@material-ui/icons';

import styles from './BottomBar.module.css';

type BottomBarProps = {
	activeAction: number;
};

export default function BottomBar(props: BottomBarProps) {
	const routes: { [key: number]: string } = {
		0: '/',
		1: '/map'
	};

	const router = useRouter();

	const onClick = (event: ChangeEvent<{}>, newValue: number) => {
		// router.push(routes[newValue])
	};

	return (
		<div className={styles.container}>
			<BottomNavigation value={props.activeAction} onChange={onClick} showLabels>
				<BottomNavigationAction component={Link} href="/" icon={<Home />} />
				<BottomNavigationAction component={Link} href="/map" icon={<Map />} />
			</BottomNavigation>
		</div>
	);
}
