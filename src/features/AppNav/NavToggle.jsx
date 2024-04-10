import { Hexagon } from "lucide-react";
import { useContext } from "react";
import NavContext from "./NavContext";

export default function NavToggle() {
	const navCtx = useContext(NavContext);

	function handleOnClick(event) {
		console.log(navCtx);
		if (navCtx.expansion.isExpanded) {
			navCtx.expansion.setIsExpanded(false);
		} else {
			navCtx.expansion.setIsExpanded(true);
		}
	}

	return (
		<button className={`w-full px-2 py-2 text-${""}`} onClick={handleOnClick}>
			<Hexagon size={24} strokeWidth={2} absoluteStrokeWidth={true} />
		</button>
	);
}
