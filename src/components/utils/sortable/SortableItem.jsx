import React, { useContext } from "react";
import { SortableListContext } from "./SortableListContext";
import { SortableItemContext } from "./SortableItemContext";
import DragHandle from "./DragHandle";

/**
 * @summary A wrapper component which creates a draggable and sortable element.
 * @param {string} channel - Defines which reorderables can be placed into which containers.
 * @param {DragHandle} dragHandle - The drag handle component used to drag and drop this item.
 * @param {string} sortableItemId - This sortable item's unique identifier. Must be unique within the channel.
 */
export default function SortableItem(props) {
	const sortableListContext = useContext(SortableListContext);

	function handleOnDragEnter(event) {
		// preventDefault call is required to identify a valid drop target
		// https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#specifying_drop_targets
		event.preventDefault();

		if (
			event.dataTransfer.getData("dragged-item-reorderable-id") ==
			props.reorderableId
		) {
			return;
		}

		setTimeout(() => {
			reorderItemsHelper(event);
		}, 500);
	}

	function handleOnDragOver(event) {
		// preventDefault call is required to identify a valid drop target
		// https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#specifying_drop_targets
		event.preventDefault();
	}

	function handleOnDrop(event) {
		if (
			event.dataTransfer.getData("dragged-item-reorderable-id") ==
			props.reorderableId
		) {
			return;
		}

		reorderItemsHelper(event);
	}

	function reorderItemsHelper(event) {
		const draggedItemId = event.dataTransfer.getData(
			"dragged-item-reorderable-id"
		);
		const dropTargetId = props.reorderableId;
		sortableListContext(draggedItemId, dropTargetId);
	}

	const ctx = {
		dragHandleEvents: {
			handleOnDragEnter: handleOnDragEnter,
		},
		sortableItemId: props.reorderableId,
	};

	return (
		<div
			className={`${props.className} flex justify-between items-start`}
			onDragEnter={handleOnDragEnter}
			onDragOver={handleOnDragOver}
			onDrop={handleOnDrop}
			// onMouseEnter={handleOnMouseEnter}
			// onMouseLeave={handleOnMouseExit}
		>
			<SortableItemContext.Provider value={ctx}>
				{props.children}
			</SortableItemContext.Provider>
		</div>
	);
}
