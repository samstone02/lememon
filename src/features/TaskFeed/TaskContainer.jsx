import AnnouncementTask from "./tasks/AnnouncementTask";
import SortableList from "@components/utils/sortable/SortableList";
import SortableItem from "@components/utils/sortable/SortableItem";
import ToDoTask from "./tasks/ToDoTask";

export default function TaskContainer(props) {
	return (
		<SortableList
			className={`flex flex-col gap-3 overflow-scroll p-5 ${props.className}`}
		>
			<SortableItem className="border-2 border-neutral-inverse-one rounded-sm p-3">
				<AnnouncementTask title="new structure" paragraph="paragraph" />
			</SortableItem>
			<SortableItem className="border-2 border-neutral-inverse-one rounded-sm p-3">
				<ToDoTask title="new structure" paragraph="paragraph" />
			</SortableItem>
			<SortableItem className="border-2 border-neutral-inverse-one rounded-sm p-3">
				<ToDoTask title="heading" paragraph="text" />
			</SortableItem>
			<SortableItem className="border-2 border-neutral-inverse-one rounded-sm p-3">
				<ToDoTask
					title="long paragraph"
					paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam aspernatur sequi obcaecati nulla unde ducimus sit quia beatae architecto earum cum id ipsa repellendus magnam totam ullam, odit delectus? Eos."
				/>
			</SortableItem>
			<SortableItem className="border-2 border-neutral-inverse-one rounded-sm p-3">
				<ToDoTask
					title="very looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong heading"
					paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam aspernatur sequi obcaecati nulla unde ducimus sit quia beatae architecto earum cum id ipsa repellendus magnam totam ullam, odit delectus? Eos."
				/>
			</SortableItem>
		</SortableList>
	);
}
