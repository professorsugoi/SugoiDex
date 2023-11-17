// Full page info for gallery item
export interface GalleryItem {
	ID: string;
	Image: string;
	Species: string;
	DesignType: string;
	Owner: string;
	Artist: string;
	Designer: string;
	Worth: string;
	Status: string;
	TransactionType: string;
	Notes: string;
}

// Pagination for @astro-headless-ui
export interface Page {
	data: any[]; // Array of data for the current page
	start: number; // Index of first item on current page
	end: number; // Index of last item on current page
	size: number; // How many items per-page
	total: number; // The total number of items across all pages
	currentPage: number; // The current page number, starting with 1
	lastPage: number; // The total number of pages
}
