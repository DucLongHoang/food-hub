import { useEffect, useState } from "react";
import axios from "axios";

function useIsMatch(userId: string) {
	const [data, setData] = useState({ restauraceId: null, users: [] });

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(
					`http://20.93.5.89:8080/match_${userId}`
				);
				if (response.status === 200) {
					setData(response.data);
				} else {
					setData({ restauraceId: null, users: [] });
				}
			} catch (error) {
				console.error("An error occurred:", error);
				setData({ restauraceId: null, users: [] });
			}
		};

		const fetchDataInterval = setInterval(fetchData, 5000); // Poll every 5 seconds

		return () => {
			clearInterval(fetchDataInterval);
		};
	}, [userId]);

	return data;
}

export default useIsMatch;
