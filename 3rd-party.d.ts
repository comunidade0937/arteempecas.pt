import { Control } from 'leaflet';

declare module 'leaflet.locatecontrol' {
	export default class Locate extends Control.Locate {
		constructor(options: Control.LocateOptions);
	}

	export type LocateOptions = Control.LocateOptions;
}
