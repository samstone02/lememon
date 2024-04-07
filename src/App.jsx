import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AppContext from "./AppContext";
import AppHome from "@views/app/home";
import AppLayout from "@components/layouts/AppLayout";
import { getTheme } from "@utils/preferences/theme";
import { useState } from "react";

export default function App() {
	console.debug("GETHME");
	console.debug(getTheme());

	const [theme, setTheme] = useState(getTheme());

	return (
		<BrowserRouter>
			<AppContext.Provider value={{ theme: theme, setTheme: setTheme }}>
				<Routes>
					<Route path="app" element={<AppLayout />}>
						<Route path="" element={<Navigate replace to="/app/home" />} />
						<Route path="blog" element={<AppHome />} />
						<Route path="calendar" element={<AppHome />} />
						<Route path="flashcards" element={<AppHome />} />
						<Route path="home" element={<AppHome />} />
						<Route path="notes" element={<AppHome />} />
						<Route path="to-do" element={<AppHome />} />
					</Route>
				</Routes>
			</AppContext.Provider>
		</BrowserRouter>
	);
}
