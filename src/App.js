import { Routes, Route } from "react-router-dom";

import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

import Home from "./pages/home/Home";
import Final from "./pages/final/Final";
import Quiz from "./pages/quiz/Quiz";

import "./App.css";

function App() {
	return (
		<div className="App">
			<Header />

			<Routes>
				<Route element={<Home />} path="/" />
				<Route element={<Final />} path="/final" />
				<Route element={<Quiz />} path="/quiz" />
			</Routes>

			<Footer />
		</div>
	);
}

export default App;
