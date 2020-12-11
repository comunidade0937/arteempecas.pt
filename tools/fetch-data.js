const axios = require('axios');
const fsp = require('fs').promises;
const hashSum = require('hash-sum');

const url = 'https://spreadsheets.google.com/feeds/cells/1SbqtiD7tJbH45dW82_eA6EZ79q_ogWeUSWQTK7ia6lk/1/public/values?alt=json';

function parseFeed(feed) {
	const rows = [];
	feed.entry.forEach(function (entry) {
		const col = parseInt(entry.gs$cell.col);
		const row = parseInt(entry.gs$cell.row);
		const content = entry.gs$cell.$t;
		const rowD = (rows[row - 1] = rows[row - 1] || []);
		rowD[col - 1] = content ? content.trim() : '';
	});
	return rows;
}

(async function fetchData() {
	try {
		const response = await axios.get(url);

		const markers = parseFeed(response.data.feed)
			.slice(1)
			.filter((row) => !!row[2])
			.map((row) => {
				const name = row[0];
				const address = row[1];
				const coordinates = row[2].split(',').map((s) => Number.parseFloat(s.trim()));
				const flyer = row[3];
				const description = row[4];
				const description2 = row[5];
				const id = hashSum(coordinates.join(','));
				return { id, flyer, name, address, description, description2, coordinates };
			})
			.sort((a, b) => a.id - b.id);

		await fsp.writeFile('public/markers.json', JSON.stringify(markers, undefined, 4), 'utf8');
	} catch (error) {
		console.error(error);
	}
})();
