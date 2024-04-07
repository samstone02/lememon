import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AppContext from "./AppContext";
import AppHome from "@views/app/home";
import AppLayout from "@components/layouts/AppLayout";
import { getTheme } from "@utils/storage/storage";

export default function App() {
	return (
		<BrowserRouter>
			<AppContext.Provider value={{ theme: getTheme() }}>
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
