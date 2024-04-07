import { useContext, useState } from "react";
import NavControls from "./NavControls";
import NavTabContainer from "./NavTabContainer";
import AppNavContext from "./AppNavContext";
import AppContext from "@/AppContext";

export default function AppNav() {
	const appCtx = useContext(AppContext);
	console.log(appCtx.theme.border);
	const [isExpanded, setIsExpanded] = useState(true);
	return (
		<nav
			className={`grow-0 shrink-0 flex flex-col justify-between border-r-2 border-${
				appCtx.theme.border
			} ${isExpanded ? "w-48" : "w-11"}`}
		>
			<AppNavContext.Provider
				value={{
					expansion: {
						isExpanded: isExpanded,
						setIsExpanded: setIsExpanded,
					},
				}}
			>
				<NavTabContainer />
				<NavControls />
			</AppNavContext.Provider>
		</nav>
	);
}
