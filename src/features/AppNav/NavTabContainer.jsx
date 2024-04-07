import { CircleCheck, Calendar, Home, Layers } from "lucide-react";
import NavTab from "./NavTab";
import NavToggle from "./NavToggle";

export default function NavTabContainer(props) {
	return (
		<div className="flex flex-col align-center">
			<NavToggle></NavToggle>
			<NavTab to="/app/home" title="Home" icon={<Home size={24} />} />
			<NavTab
				to="/app/calendar"
				title="Calendar"
				icon={<Calendar size={24} />}
			/>
			<NavTab
				to="/app/flashcards"
				title="Flashcards"
				icon={<Layers size={24} />}
			/>
			<NavTab to="/app/to-do" title="To Do" icon={<CircleCheck size={24} />} />
		</div>
	);
}
