import MiniCalendar from "@features/MiniCalendar";
import StickyNote from "@features/StickyNote";
import TaskFeed from "@features/TaskFeed";
import { useContext } from "react";

export default function AppHome() {
	return (
		<div className="grid grid-cols-2 grid-rows-2 gap-4 h-full w-full">
			<TaskFeed
				className={`row-span-2 col-span-1 border-solid border-e-ink border-2`}
			/>
			<MiniCalendar className="row-span-1 col-span-1 border-solid border-e-ink border-2" />
			<StickyNote className="row-span-1 col-span-1 border-solid border-e-ink border-2" />
		</div>
	);
}
