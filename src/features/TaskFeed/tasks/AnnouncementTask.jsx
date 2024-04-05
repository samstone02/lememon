import { ChevronLeft } from "lucide-react";
import Paragraph from "@components/elements/Paragraph";
import Button from "@components/elements/Button";
import TaskItem from "../TaskItem";

export default function AccouncementTask(props) {
	return (
		<TaskItem
			headingMiddle={props.heading}
			// chevronMenu={
			// 	<ChevronLeft size={24} strokeWidth={2} absoluteStrokeWidth={true} />
			// }
		>
			<Paragraph className="break-words">{props.paragraph}</Paragraph>
			<Button>OK</Button>
			<Button>Learn More</Button>
		</TaskItem>
	);
}
