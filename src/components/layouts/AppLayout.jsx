import { Outlet } from "react-router-dom";
import AppNav from "@features/AppNav";

export default function AppLayout() {
	return (
		<div className="h-screen flex bg-e-paper">
			<AppNav />
			<main className="p-12 w-full">
				<Outlet />
			</main>
		</div>
	);
}
