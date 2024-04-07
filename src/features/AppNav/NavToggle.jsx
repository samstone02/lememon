import { Hexagon } from "lucide-react";
import { useContext } from "react";
import AppNavContext from "./AppNavContext";

export default function NavToggle() {
	const ctx = useContext(AppNavContext);
	function handleOnClick(event) {
		console.log(ctx);
		if (ctx.expansion.isExpanded) {
			ctx.expansion.setIsExpanded(false);
		} else {
			ctx.expansion.setIsExpanded(true);
		}
	}

	return (
		<button className="w-full px-2 py-2" onClick={handleOnClick}>
			<Hexagon size={24} strokeWidth={2} absoluteStrokeWidth={true} />
		</button>
	);
}
