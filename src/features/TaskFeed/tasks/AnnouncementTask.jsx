import { ChevronLeft } from "lucide-react";
import Paragraph from "@components/elements/Paragraph";
import Button from "@components/elements/Button";
import TaskItem from "../TaskItem";

export default function AccouncementTask(props) {
	return (
		<TaskItem title={props.title}>
			<div className="col-span-3">
				<Paragraph className="break-words">{props.paragraph}</Paragraph>
				<Button>OK</Button>
				<Button>Learn More</Button>
			</div>
		</TaskItem>
	);
}
