import { useContext, useState } from "react";
import NavControls from "./NavControls";
import NavTabContainer from "./NavTabContainer";
import AppNavContext from "./NavContext";
import AppContext from "@/AppContext";

export default function AppNav() {
	const appCtx = useContext(AppContext);
	const [isExpanded, setIsExpanded] = useState(true);

	console.log(appCtx);

	return (
		<nav
			className={`grow-0 shrink-0 flex flex-col justify-between border-r-2 border-${
				appCtx.theme.color.neutralInverse.one
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
