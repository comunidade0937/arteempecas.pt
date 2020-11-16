import { Component } from 'react';
import { MapComponentProps, withLeaflet } from 'react-leaflet';
import Locate, { LocateOptions } from 'leaflet.locatecontrol';
import { Map } from 'leaflet';

export type LocateControlParams = MapComponentProps & {
	options: LocateOptions;
	startDirectly: boolean;
};

class LocateControl extends Component<LocateControlParams> {
	componentDidMount() {
		const { options, startDirectly } = this.props;
		const map = this.props?.leaflet?.map as Map;

		const lc = new Locate(options);
		lc.addTo(map);

		if (startDirectly) {
			// request location update and set location
			lc.start();
		}
	}

	render() {
		return null;
	}
}

export default withLeaflet(LocateControl);
