// minimal 'oneliner' blog
import { tsvParse } from 'd3-dsv';
import { url } from 'inspector';

var oneliners = [
	'experiments'
]

// fetch each oneliner
export async function load({ params }) {
	const { slug } = params;
	const topic = slug.toLowerCase();
	
	if (!oneliners.includes(topic)) {
		throw error(404, {
			message: 'Not found',
			code: 'NOT_FOUND'
		});
	}

	const url = `https://txt.xcc.es/${topic}.tsv`;

	const response = await fetch(url);
	const text = await response.text();
	const data = tsvParse(text);
	// data.forEach(d => {
	return {
		columns: data.columns,
		data: data
	};

}