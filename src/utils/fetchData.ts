import { type GalleryItem } from '../types';

const baseUrl = 'https://spacet-sugoidex.vercel.app';
const sheetId = '1djBTbS-D78r6laq1LroPRf4kvzZPNmjQ1jLHmTrmXbY';
const sheetName = 'PublicMasterlist';
const endpoint = `${baseUrl}/${sheetId}/${sheetName}.json`;

export async function getAllGalleryItems(filters: { [key: string]: string }): Promise<GalleryItem[]> {
	const response = await fetch(endpoint);
	if (!response.ok) {
		throw new Error('Unable to load data from ' + endpoint);
	}

	const { values } = await response.json();
	const [header, ...rows] = values;

	if (Object.keys(filters).length > 0) {
		return rows
			.filter((row) => {
				// Check each filter criterion
				return Object.keys(filters).every((filterKey) => {
					const columnIndex = header.indexOf(filterKey);
					if (columnIndex === -1) return true; // Skip if column does not exist
					return row[columnIndex] === filters[filterKey];
				});
			})

			.map((row) => {
				const entries = header.map((key, i) => [key, row[i]]);
				return Object.fromEntries(entries) as GalleryItem;
			});
	}
}
