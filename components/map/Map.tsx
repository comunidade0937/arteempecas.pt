import { LatLngExpression, latLngBounds, LeafletMouseEvent, divIcon } from 'leaflet';
import { Map as LeafletMap, Marker, TileLayer } from 'react-leaflet';

import { useState, forwardRef, ReactElement, Ref } from 'react';

import Avatar from '@material-ui/core/Avatar';

import MapIcon from '@material-ui/icons/Map';
import DescriptionIcon from '@material-ui/icons/Description';
import RoomIcon from '@material-ui/icons/Room';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import Box from '@material-ui/core/Box';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Link from '@material-ui/core/Link';

import Slide from '@material-ui/core/Slide';
import { TransitionProps } from '@material-ui/core/transitions';

import styles from './Map.module.css';
import LocateControl from './LocateControl';
import { LocateOptions } from 'leaflet.locatecontrol';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		dialogAvatar: {
			color: theme.palette.getContrastText('#098b81'),
			backgroundColor: '#098b81',
		},

		dialogScrollPaper: {
			alignItems: 'flex-end',
			paddingBottom: '100px',
		},
	}),
);

export type MyMarker = {
	id: string;
	name: string;
	flyer: string;
	address: string;
	type: string;
	coordinates: LatLngExpression;
	link: string;
	description: string;
	description2: string;
};

type MapProps = {
	markers?: Array<MyMarker>;
	currentMarkerId?: string;
	onMarkerClicked?: (marker: MyMarker | undefined) => void;
};

const googleMapsUrl = 'https://www.google.com/maps/dir/?api=1&travelmode=driving&layer=traffic&destination=';

const Transition = forwardRef(function Transition(props: TransitionProps & { children?: ReactElement<any, any> }, ref: Ref<unknown>) {
	return <Slide direction="up" ref={ref} {...props} />;
});

export default function Map({ markers = [], currentMarkerId, onMarkerClicked = () => {} }: MapProps) {
	const classes = useStyles();

	const [isNewMap, setIsNewMap] = useState<boolean>(true);

	const markers2 = markers.map((marker, i) => {
		const selected = marker.id === currentMarkerId;

		const classes = selected ? [styles.mapMarker, styles.mapMarkerSelected] : [styles.mapMarker];

		const icon = divIcon({
			className: classes.join(' '),
			iconSize: [20, 20],
			iconAnchor: [10, 10],
			popupAnchor: [0, 0],
			html: marker.flyer,
		});

		const link = googleMapsUrl + marker.coordinates;

		return {
			...marker,
			icon,
			link,
		};
	});

	const bounds = latLngBounds(markers.map((marker) => marker.coordinates));

	const currentMarker = markers2.find((marker) => marker.id === currentMarkerId);

	const maxBounds = bounds.pad(1);

	const mapProps =
		(currentMarker && {
			center: currentMarker.coordinates,
			zoom: 19,
		}) ||
		(isNewMap && {
			bounds,
		});

	const locateOptions: LocateOptions = {
		flyTo: true,
		position: 'topright',
		strings: {
			title: 'A minha localização!',
			outsideMapBoundsMsg: 'Parece que estamos um pouco longe.',
		},

		onLocationOutsideMapBounds() {},

		icon: styles.mapLocateIcon,

		onLocationError() {},
	};

	const handleMarkerClick = (marker: MyMarker) => (event: LeafletMouseEvent) => {
		onMarkerClicked(marker);
	};

	const handleCloseDialog = () => {
		setIsNewMap(false);
		onMarkerClicked(undefined);
	};

	return (
		<div className={styles.mapContainer}>
			<LeafletMap {...mapProps} useFlyTo className={styles.map} maxZoom={19} minZoom={15} maxBounds={maxBounds}>
				<LocateControl options={locateOptions} startDirectly />

				<TileLayer
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					// url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png"
					attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
				/>

				{markers2.map((marker, i) => (
					<Marker key={i} position={marker.coordinates} icon={marker.icon} onclick={handleMarkerClick(marker)}></Marker>
				))}
			</LeafletMap>
			<Dialog
				open={!!currentMarker}
				classes={{ scrollPaper: classes.dialogScrollPaper }}
				TransitionComponent={Transition}
				keepMounted
				scroll="body"
				onClose={handleCloseDialog}
				aria-labelledby="alert-dialog-slide-title"
				aria-describedby="alert-dialog-slide-description">
				<DialogTitle id="alert-dialog-slide-title">
					<Box display="flex" alignItems="center">
						<Avatar className={classes.dialogAvatar}>{currentMarker?.flyer}</Avatar>
						<Box ml={2}>{currentMarker?.name}</Box>
					</Box>
				</DialogTitle>
				<DialogContent>
					<DialogContentText id="alert-dialog-slide-description">
						{currentMarker?.address && (
							<Box component="span" display="flex" alignItems="center">
								<RoomIcon />
								<Box component="span" ml={1}>
									{currentMarker?.address}
								</Box>
							</Box>
						)}
					</DialogContentText>
					<DialogContentText id="alert-dialog-slide-description">
						{currentMarker?.description && (
							<Box component="span" display="flex" alignItems="center">
								<DescriptionIcon />
								<Box component="span" ml={1}>
									{currentMarker?.description}
								</Box>
							</Box>
						)}
					</DialogContentText>
					<DialogContentText align="justify">{currentMarker?.description2}</DialogContentText>
					<DialogContentText>
						<Link href={currentMarker?.link} target="_blank" rel="noopener">
							<Box component="span" display="flex" alignItems="center">
								<MapIcon />
								<Box component="span" ml={1}>
									Direcções
								</Box>
							</Box>
						</Link>
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleCloseDialog} color="primary">
						Fechar
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}
