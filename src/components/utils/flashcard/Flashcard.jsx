import Flip from "@components/utils/flip/Flip";

/**
 * @summary A flashcard for the user to self-test. Adds functionality on top of a &lt;Flip&gt;
 * @param {*} props
 */
export default function Flashcard(props) {
	return (
		<Flip
			className={`${props.className}`}
			front={props.front}
			back={props.back}
			frontFaceClassName={props.frontFaceClassName}
			backFaceClassName={props.backFaceClassName}
		/>
	);
}
