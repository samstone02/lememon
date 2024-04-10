import { useContext } from "react";

export default function StandardParagraph(props) {
	const baseClassName = `text-sm text-${""}`;
	return (
		<p className={`${props.className} ${baseClassName}`}>{props.children}</p>
	);
}
