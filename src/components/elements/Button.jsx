import { useContext } from "react";
import AppContext from "@/AppContext";

export default function StandardButton(props) {
	const appCtx = useContext(AppContext);
	return (
		<button
			className={`text-lagoon px-4 py-1 border-solid border-2 border-lagoon rounded-lg hover:bg-${appCtx.theme.color.primary.one} hover:text-${appCtx.theme.color.neutral.one} transition-colors`}
			onClick={props.onClick}
		>
			{props.children}
		</button>
	);
}
