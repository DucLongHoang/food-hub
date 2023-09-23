import { useEffect, useState } from "react";
import { CuisineType, Restaurant } from "../types/Restaurant";

function mapRestaurantData(data: any): Restaurant {
	// Map the fields from the fetched data to your desired format
	return {
		name: data.name,
		cuisine: CuisineType.AMERICAN,
		image: data.img_path || "",
	};
}

function useFetchAllRestaurants() {
	const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
	const [error, setError] = useState(null);

	useEffect(() => {
		fetch("http://20.93.5.89:8080/restaurants")
			.then((response) => {
				if (!response.ok) {
					throw new Error("Error vole");
				} else {
					return response.json(); // Call response.json() to parse JSON
				}
			})
			.then((data) => {
				const mappedRestaurants: Restaurant[] = data.map(mapRestaurantData);
				setRestaurants(mappedRestaurants); // Update the state with the fetched data
				setError(null); // Clear any previous error if successful
			})
			.catch((err) => {
				setError(err); // Set the error state if there's an error
			});
	}, []);

	return { restaurants, error };
}

export default useFetchAllRestaurants;
