export default function StandardParagraph(props) {
	const baseClassName = "text-md text-e-paper-darker";
	return (
		<p className={`${props.className} ${baseClassName}`}>{props.children}</p>
	);
}
