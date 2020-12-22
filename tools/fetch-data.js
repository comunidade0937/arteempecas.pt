const axios = require('axios');
const fs = require('fs');
const hashSum = require('hash-sum');
const parse = require('csv-parse');

const { finished } = require('stream/promises');

const fsp = fs.promises;

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

const parseCSV = async (file) => {
	const records = [];

	const parser = fs
		.createReadStream(file)
		.pipe(
			parse({
				// CSV options if any
			}),
		)
		.on('readable', function () {
			let record;
			while ((record = parser.read())) {
				records.push(record);
			}
		});

	await finished(parser);

	return records;
};

(async function fetchData() {
	try {
		const response = await axios.get(url);

		const tourEntries = await parseCSV('data/tour.csv');

		const tourMap = tourEntries.reduce((acc, [flyer, node]) => ({ ...acc, [flyer]: node }), {});

		const markers = parseFeed(response.data.feed)
			.slice(1)
			.filter((row) => !!row[2])
			.map((row) => {
				const name = row[0];
				const address = row[1];
				const coordinates = row[2].split(',').map((s) => Number.parseFloat(s.trim()));
				const flyer = row[3];
				const tourNode = tourMap[flyer];
				const description = row[4];
				const description2 = row[5];
				const id = hashSum(coordinates.join(','));
				return { id, flyer, name, address, description, description2, coordinates, tourNode };
			})
			.sort((a, b) => a.id - b.id);

		await fsp.writeFile('data/markers.json', JSON.stringify(markers, undefined, 4), 'utf8');
	} catch (error) {
		console.error(error);
	}
})();
