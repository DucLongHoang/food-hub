// src/components/Header.tsx
import React, { useState } from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

function Header() {
	const navigate = useNavigate();
	const [isHomePage, setIsHomePage] = useState(true);
	const [isSettingsPage, setIsSettingsPage] = useState(false);

	const handleHomeClick = () => {
		setIsHomePage(true);
		setIsSettingsPage(false);
		navigate("/home");
	};

	const handleSettingsClick = () => {
		setIsHomePage(false);
		setIsSettingsPage(true);
		navigate("/settings");
	};

	return (
		<header>
			<Navbar
				onSettingsClick={handleSettingsClick}
				onBackClick={handleHomeClick}
				isHomePage={isHomePage}
				isSettingsPage={isSettingsPage}
			/>
		</header>
	);
}

export default Header;
