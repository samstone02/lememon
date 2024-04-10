import { Outlet } from "react-router-dom";
import AppNav from "@features/AppNav";
import { useContext } from "react";

export default function AppLayout() {
	return (
		<div className={`h-screen flex bg-neutral-one text-${""}`}>
			<AppNav />
			<main className="p-12 w-full">
				<Outlet />
			</main>
		</div>
	);
}
