import React, { useState } from "react";
import { Screen } from "../types/Screen";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";
import DailyPreferencesForm from "../components/DailyPreferenceForm";

function Welcome() {
	const [currentScreen, setCurrentScreen] = useState<Screen>(Screen.LOGIN);

	const handleSwitchScreen = (newScreen: Screen) => {
		setCurrentScreen(newScreen);
	};

	return (
		<>
			{true ? (
				<>
					{currentScreen === Screen.LOGIN ? (
						<>
							<LoginForm />
							<button
								style={submitButtonStyles}
								onClick={() => handleSwitchScreen(Screen.REGISTER)}
							>
								Register
							</button>
						</>
					) : (
						<>
							<RegisterForm />
							<button
								style={submitButtonStyles}
								onClick={() => handleSwitchScreen(Screen.LOGIN)}
							>
								Login
							</button>
						</>
					)}
				</>
			) : (
				<DailyPreferencesForm />
			)}
		</>
	);
}

export default Welcome;

const submitButtonStyles: React.CSSProperties = {
	margin: "10px",
	width: "10%",
	padding: "10px",
	fontSize: "16px",
	backgroundColor: "gray",
	color: "white",
	border: "none",
	borderRadius: "5px",
	cursor: "pointer",
};
