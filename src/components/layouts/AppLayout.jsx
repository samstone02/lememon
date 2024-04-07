import { Outlet } from "react-router-dom";
import AppNav from "@features/AppNav";
import { useContext } from "react";
import AppContext from "../../AppContext";

export default function AppLayout() {
	const appCtx = useContext(AppContext);
	return (
		<div
			className={`h-screen flex bg-${appCtx.theme.background} text-${appCtx.theme.text}`}
		>
			<AppNav />
			<main className="p-12 w-full">
				<Outlet />
			</main>
		</div>
	);
}
