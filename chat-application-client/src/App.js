import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Chat from "./components/pages/Chat/Chat";
import Home from "./components/pages/Home/Home";
import Login from "./components/pages/Login/Login";
import NoMatch from "./components/Shared/NoMatch/NoMatch";
import "./App.css";

function App() {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/home" element={<Home />} />
					<Route path="/login" element={<Login />} />
					<Route path="/chat" element={<Chat />} />
					<Route path="*" element={<NoMatch />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
