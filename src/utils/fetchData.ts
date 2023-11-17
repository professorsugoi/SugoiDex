import { type GalleryItem } from '../types';

const baseUrl = 'https://sheet-spacet-me.vercel.app';
const sheetId = '1djBTbS-D78r6laq1LroPRf4kvzZPNmjQ1jLHmTrmXbY';
const sheetName = 'PublicMasterlist';
const endpoint = `${baseUrl}/${sheetId}/${sheetName}.json`;

export async function getAllGalleryItems(): Promise<GalleryItem[]> {
	const response = await fetch(endpoint);
	if (!response.ok) {
		throw new Error('Unable to load data from ' + endpoint);
	}
	const { values } = await response.json();
	const [header, ...rows] = values;
	return rows.map((row) => {
		const entries = header.map((key, i) => [key, row[i]]);
		return Object.fromEntries(entries) as GalleryItem;
	});
}
