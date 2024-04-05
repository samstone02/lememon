import DragHandle from "@components/utils/sortable/DragHandle";

export default function TaskItem(props) {
	const dragHandle = (
		<DragHandle className="row-span-1 col-span-1 place-self-end self-start" />
	);
	let columnTemplate = "grid-cols-[24px,auto,24px]";
	if (!props.headingLeft) {
		columnTemplate = "grid-cols-[auto,24px]";
	}

	return (
		<div className="w-full">
			<div className={`grid ${columnTemplate} align-center`}>
				{props.headingLeft && props.headingLeft}
				{props.headingMiddle}
				{dragHandle}
			</div>
			{props.content}
		</div>
	);
}
