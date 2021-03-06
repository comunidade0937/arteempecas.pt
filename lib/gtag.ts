export const GA_TRACKING_ID = 'UA-1495990-5';

type EventParams = { action: string; category: string; label: string; value: number };

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string) => {
	window.gtag('config', GA_TRACKING_ID, {
		page_path: url,
	});
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }: EventParams) => {
	window.gtag('event', action, {
		event_category: category,
		event_label: label,
		value: value,
	});
};
