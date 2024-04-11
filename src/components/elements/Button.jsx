import { useContext } from "react";

export default function StandardButton(props) {
	return (
		<button
			className={`text-primary-one px-4 py-1 border-solid border-2 border-primary-one rounded-lg hover:bg-primary-one hover:text-${""} transition-colors`}
			onClick={props.onClick}
		>
			{props.children}
		</button>
	);
}
