import { useContext } from "react";

export default function StandardButton(props) {
	return (
		<button
			className={`text-lagoon px-4 py-1 border-solid border-2 border-lagoon rounded-lg hover:bg-${""} hover:text-${""} transition-colors`}
			onClick={props.onClick}
		>
			{props.children}
		</button>
	);
}
