// src/components/Footer.tsx
import React from "react";

function Footer() {
	return (
		<footer
			style={{
				backgroundColor: "red",
				padding: "20px",
				position: "sticky",
				bottom: 0,
			}}
		>
			<p>&copy; {new Date().getFullYear()} My SPA</p>
		</footer>
	);
}

export default Footer;
