import { LayoutGrid, Settings, SunMoon } from "lucide-react";
import { useContext } from "react";
import NavContext from "./NavContext";
import { getTheme, setTheme } from "@utils/options/theme/theme-management";

export default function NavControls() {
	const navCtx = useContext(NavContext);

	return (
		<div
			className={`flex ${
				!navCtx.expansion.isExpanded ? "flex-col-reverse" : null
			} align-center gap-2 p-2`}
		>
			<button
				onClick={(event) => {
					let currentThemeName = getTheme();
					console.log(currentThemeName);

					if (currentThemeName == "light") {
						setTheme("dark");
					} else {
						setTheme("light");
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
