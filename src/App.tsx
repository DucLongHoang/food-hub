import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Note the change from `Switch` to `Routes`
import Home from "./pages/Home";
import Settings from "./pages/Settings";
import Welcome from "./pages/Welcome";
import Header from "./components/Header";
import { UserProvider } from "./UserContext";

function App() {
	return (
		<Router>
			<UserProvider>
				<>
					<Header />
					<div className="content">
						<Routes>
							<Route path="/" element={<Welcome />}></Route>
							<Route path="/home" element={<Home />} />
							<Route path="/settings" element={<Settings />}></Route>
						</Routes>
					</div>
				</>
			</UserProvider>
		</Router>
	);
}

export default App;
