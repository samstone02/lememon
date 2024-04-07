import DragHandle from "@components/utils/sortable/DragHandle";
import Heading from "@components/elements/Heading";

/**
 * @param {string} props.body The content of the TaskItem. Up to implementation to style the content correctly given the 3-column grid display.
 */
export default function TaskItem(props) {
	let headerIcon;
	let headerTitle;
	if (props.headerIcon) {
		headerIcon = props.headerIcon;
		headerTitle = (
			<Heading level={3} className="break-words">
				{props.title}
			</Heading>
		);
	} else {
		headerTitle = (
			<Heading level={3} className="break-words col-span-2">
				{props.title}
			</Heading>
		);
	}

	return (
		<div className="w-full">
			<div
				className={`grid grid-cols-[24px,auto,24px] gap-x-2 gap-y-1 align-center`}
			>
				{headerIcon && headerIcon}
				{headerTitle}
				<DragHandle className="row-span-1 col-span-1 place-self-end self-start" />
				{props.children}
			</div>
		</div>
	);
}
