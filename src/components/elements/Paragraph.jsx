import { useContext } from "react";
import AppContext from "@/AppContext";

export default function StandardParagraph(props) {
	const appCtx = useContext(AppContext);
	const baseClassName = `text-sm text-${appCtx.theme.color.neutral.two}`;
	return (
		<p className={`${props.className} ${baseClassName}`}>{props.children}</p>
	);
}
