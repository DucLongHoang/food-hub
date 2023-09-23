// src/components/Navbar.tsx
import React from "react";
import { AppBar, Toolbar, IconButton } from "@mui/material";
import { ArrowBack, Settings, ExitToApp } from "@mui/icons-material";

interface NavbarProps {
	onSettingsClick: () => void;
	onBackClick: () => void;
	isHomePage: boolean;
	isSettingsPage: boolean;
}

function Navbar({
	onSettingsClick,
	onBackClick,
	isHomePage,
	isSettingsPage,
}: NavbarProps) {
	return (
		<AppBar position="fixed" color="default" style={{ width: "100%" }}>
			<Toolbar>
				{isSettingsPage && (
					<IconButton
						edge="start"
						color="inherit"
						aria-label="back"
						onClick={onBackClick}
					>
						<ArrowBack />
					</IconButton>
				)}
				<div style={{ flex: 1 }}></div>

				<IconButton
					edge="start"
					color="inherit"
					aria-label="back"
					onClick={onBackClick}
				>
					<ExitToApp />
				</IconButton>
				{isHomePage && (
					<IconButton
						color="inherit"
						aria-label="settings"
						onClick={onSettingsClick}
					>
						<Settings />
					</IconButton>
				)}
			</Toolbar>
		</AppBar>
	);
}

export default Navbar;
