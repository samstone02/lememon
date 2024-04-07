export default function StandardHeading(props) {
	const className = props.className ? props.className : "";
	const baseClassName = "text-xl font-medium";
	let h;
	switch (props.level) {
		case 1:
			h = (
				<h1 className={`${className} text-2xl font-medium`}>
					{props.children}
				</h1>
			);
			break;
		case 2:
			h = (
				<h2 className={`${className} text-xl font-medium`}>{props.children}</h2>
			);
			break;
		case 3:
			h = (
				<h3 className={`${className} text-lg font-medium`}>{props.children}</h3>
			);
			break;
		case 4:
			h = (
				<h4 className={`${className} text-lg font-medium`}>{props.children}</h4>
			);
			break;
		case 5:
			h = <h5 className={`${className} ${baseClassName}`}>{props.children}</h5>;
			break;
		case 6:
			h = <h6 className={`${className} ${baseClassName}`}>{props.children}</h6>;
			break;
		default:
			h = <h1>{props.children}</h1>;
	}
	return h;
}
