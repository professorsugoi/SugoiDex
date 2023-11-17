import { type GalleryItem } from '../types';

const baseUrl = 'https://sheet-spacet-me.vercel.app';
const sheetId = '1djBTbS-D78r6laq1LroPRf4kvzZPNmjQ1jLHmTrmXbY';
const sheetName = 'PublicMasterlist';
const endpoint = `${baseUrl}/${sheetId}/${sheetName}.json`;

export async function getAllGalleryItems(page = 1, limit = 10): Promise<GalleryItem[]> {
	const response = await fetch(endpoint);
	if (!response.ok) {
		throw new Error('Unable to load data from ' + endpoint);
	}
	const { values } = await response.json();

	// Assuming the first row is headers
	const [header, ...rows] = values;

	// Calculate the slice indices for the current page
	const startIndex = (page - 1) * limit;
	const endIndex = startIndex + limit;

	// Slice the data for the current page
	const currentPageData = rows.slice(startIndex, endIndex);

	// Map the data to your GalleryItem structure
	return currentPageData.map((row) => {
		const entries = header.map((key, i) => [key, row[i]]);
		return Object.fromEntries(entries) as GalleryItem;
	});
}
