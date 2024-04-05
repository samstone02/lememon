import { ChevronLeft, Circle, CircleCheck } from "lucide-react";
import { useState } from "react";
import StandardParagraph from "@components/elements/Paragraph";
import TaskItem from "../TaskItem";
import Heading from "@components/elements/Heading";

export default function ToDoTask(props) {
	const [finishTaskButtonHovered, setFinishTastButtonHovered] = useState(false);

	function handleOnMouseEnter(event) {
		setFinishTastButtonHovered(true);
	}

	function handleOnMouseLeave(event) {
		setFinishTastButtonHovered(false);
	}

	const checkOff = (
		<div
			className=""
			onMouseEnter={handleOnMouseEnter}
			onMouseLeave={handleOnMouseLeave}
		>
			{finishTaskButtonHovered ? (
				<CircleCheck size={24} strokeWidth={2} absoluteStrokeWidth={true} />
			) : (
				<Circle size={24} strokeWidth={2} absoluteStrokeWidth={true} />
			)}
		</div>
	);

	return (
		<TaskItem
			headingLeft={checkOff}
			headingMiddle={
				<Heading level={3} className={`place-self-start`}>
					{props.heading}
				</Heading>
			}
			// headingRight={drag
			// 	<ChevronLeft size={24} strokeWidth={2} absoluteStrokeWidth={true} />
			// }
		>
			<StandardParagraph className="break-words">
				{props.paragraph}
			</StandardParagraph>
		</TaskItem>
	);
}
