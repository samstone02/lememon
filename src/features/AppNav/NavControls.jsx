import { LayoutGrid, Settings, SunMoon } from "lucide-react";
import { useContext } from "react";
import AppNavContext from "./AppNavContext";

export default function NavControls() {
	const ctx = useContext(AppNavContext);
	return (
		<div
			className={`flex ${
				!ctx.expansion.isExpanded ? "flex-col-reverse" : null
			} align-center gap-2 p-2`}
		>
			<div>
				<SunMoon size={24} strokeWidth={2} absoluteStrokeWidth={true} />
			</div>
			<div>
				<Settings size={24} strokeWidth={2} absoluteStrokeWidth={true} />
			</div>
			<div>
				<LayoutGrid size={24} strokeWidth={2} absoluteStrokeWidth={true} />
			</div>
		</div>
	);
}
