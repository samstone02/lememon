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
		<TaskItem headerIcon={checkOff} title={props.title}>
			<StandardParagraph className="break-words col-span-2">
				{props.paragraph}
			</StandardParagraph>
		</TaskItem>
	);
}
