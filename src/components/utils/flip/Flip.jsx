import { useState } from "react";

/**
 * @summary Flips on click to hide the shown side and reveal the opposite side.
 * @param className string - Passed-down className.
 * @param front - Content on the front of the &lt;Flip/&gt;. The front is showing on initial render.
 * @param back - Content on the back of the &lt;Flip/&gt;. The back is hidden on initial render.
 */
export default function Flip(props) {
	const [isFacingUp, setIsFacingUp] = useState(true);

	function handleOnClick(event) {
		if (isFacingUp) {
			setIsFacingUp(false);
		} else {
			setIsFacingUp(true);
		}
	}

	return (
		<div
			className={`${props.className} grid`}
			style={{ width: props.width, height: props.height }}
			onClick={handleOnClick}
		>
			<div
				className={`${props.frontFaceClassName} transition-transform`}
				style={{
					transform: !isFacingUp ? "rotateY(0.5turn)" : "",
					backfaceVisibility: "hidden",
					gridRow: 1,
					gridColumn: 1,
				}}
			>
				{props.front}
			</div>
			<div
				className={`${props.backFaceClassName} transition-transform`}
				style={{
					transform: isFacingUp ? "rotateY(0.5turn)" : "",
					backfaceVisibility: "hidden",
					gridRow: 1,
					gridColumn: 1,
				}}
			>
				{props.back}
			</div>
		</div>
	);
}
