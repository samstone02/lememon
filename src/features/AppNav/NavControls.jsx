import { LayoutGrid, Settings, SunMoon } from "lucide-react";
import { useContext } from "react";
import NavContext from "./NavContext";
import AppContext from "@/AppContext";
import { themes, themeNames } from "@constants/theme";

export default function NavControls() {
	const appCtx = useContext(AppContext);
	const navCtx = useContext(NavContext);

	return (
		<div
			className={`flex ${
				!navCtx.expansion.isExpanded ? "flex-col-reverse" : null
			} align-center gap-2 p-2`}
		>
			<button
				onClick={(event) => {
					console.log(appCtx.theme);
					console.log(themes);

					if (appCtx.theme.name.toLowerCase() == themeNames.LIGHT) {
						appCtx.setTheme(themes.DARK);
					} else if (appCtx.theme.name.toLowerCase() == themeNames.DARK) {
						appCtx.setTheme(themes.LIGHT);
					} else {
						console.warn("Invalid current theme name.");
					}
				}}
			>
				<div>
					<SunMoon size={24} strokeWidth={2} absoluteStrokeWidth={true} />
				</div>
			</button>
			<div>
				<Settings size={24} strokeWidth={2} absoluteStrokeWidth={true} />
			</div>
			<div>
				<LayoutGrid size={24} strokeWidth={2} absoluteStrokeWidth={true} />
			</div>
		</div>
	);
}
