import React, { useEffect, useState } from "react";
import { CuisineType, Restaurant } from "../types/Restaurant";
import res01 from "../images/res01.jpg";
import res02 from "../images/res02.jpg";
import TinderCard from "react-tinder-card";
import axios from "axios";

const initialRestaurants: Restaurant[] = [
	{
		name: "KFC",
		image: res01,
		cuisine: CuisineType.AMERICAN,
		distance: 100,
		rating: 5,
	},
	{
		name: "U Svejka",
		image: res02,
		cuisine: CuisineType.CZECH,
		distance: 500,
		rating: 5,
	},
];

function Home() {
	const [restaurants, setRestaurants] = useState([]);

	const fetchInfo = () => {
		return axios
			.get("http://20.93.5.89:8080/restaurant")
			.then((response) => setRestaurants(response.data));
	};

	useEffect(() => {
		fetchInfo();
	}, []);

	const sendSwipeData = (name: string) => {
		const data = {
			user: "obi",
			restaurant: name,
			time_from: null,
			time_to: null,
		};

		axios
			.post("http://20.93.5.89:8080/swipe", data)
			.then((response) => {
				console.log("Swipe data sent successfully:", response.data);
			})
			.catch((error) => {
				console.error("Error sending swipe data:", error);
			});
	};

	const swiped = (direction: string, name: string) => {
		if (direction === "right") {
			sendSwipeData(name);
		}
	};

	return (
		<div className="cardContainer">
			{restaurants.map(({ address, img_path, name, avg_rating, id }) => (
				<div style={{ display: "flex" }} key={id}>
					<TinderCard
						preventSwipe={["up", "down"]}
						className="swipe"
						key={name}
						onSwipe={(direction) => swiped(direction, name)}
					>
						<div
							style={{
								backgroundImage: `url(data:image/webp;base64,${img_path})`,
							}}
							className="card"
						>
							<div
								style={{
									position: "absolute",
									bottom: "0",
									height: "80px",
									display: "flex",
									backgroundColor: "#000",
									justifyContent: "space-between",
									padding: "1rem",
									background: "rgba(0, 0, 0, 0.5)",
									color: "white",
									width: "90%",
									borderRadius: "0 0 20px 20px",
								}}
							>
								<h2>
									{name} - {Math.floor(avg_rating)}/5*
								</h2>
								<h3>{address}</h3>
							</div>
						</div>
					</TinderCard>
				</div>
			))}
		</div>
	);
}

export default Home;
