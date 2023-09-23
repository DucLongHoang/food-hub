export interface Restaurant {
	name: string;
	cuisine: CuisineType;
	image: string;
	rating?: number;
	distance?: number;
}

export enum CuisineType {
	ITALIAN = "Italian",
	CZECH = "Czech",
	CHINESE = "Chinese",
	JAPANESE = "Japanese",
	MEXICAN = "Mexican",
	INDIAN = "Indian",
	THAI = "Thai",
	FRENCH = "French",
	SPANISH = "Spanish",
	GREEK = "Greek",
	AMERICAN = "American",
	OTHER = "Other",
}
