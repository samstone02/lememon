import { Grip } from "lucide-react";
import { useContext } from "react";
import { SortableItemContext } from "./SortableItemContext";

export default function DragHandle(props) {
	const sortableItemContext = useContext(SortableItemContext);
	function handleOnDragStart(event) {
		event.dataTransfer.setData(
			"dragged-item-reorderable-id",
			sortableItemContext.sortableItemId
		);
	}
	return (
		<div
			className={`${props.className}`}
			draggable
			onDragStart={handleOnDragStart}
		>
			<Grip size={24} strokeWidth={2} absoluteStrokeWidth={true} />
		</div>
	);
}
