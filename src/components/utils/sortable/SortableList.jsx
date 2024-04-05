import React, { useEffect, useState } from "react";
import { SortableListContext } from "./SortableListContext";

/**
 * @summary Allows 'SortableItem' children to be shuffled around on mouse drag and drop.
 * @param {string} channel - Defines which reorderables can be placed into which containers.
 */
export default function ReorderableContainer(props) {
	const [children, setChildren] = useState([]);

	function reorderItems(draggedItemId, dropTargetId) {
		const draggedItemIndex = children.findIndex(
			(child) => child.props.reorderableId == draggedItemId
		);
		const dropTargetIndex = children.findIndex(
			(child) => child.props.reorderableId == dropTargetId
		);

		if (
			isDuplicateReorder(
				draggedItemId,
				dropTargetId,
				draggedItemIndex,
				dropTargetIndex
			)
		) {
			// duplicate reorders occur because both drop and dragEnter call reorderItems
			// Ensure unneeded rerenders don't happen
			return;
		}

		const shiftDown = draggedItemIndex < dropTargetIndex;

		if (shiftDown) {
			const shiftedItems = children.slice(
				draggedItemIndex + 1,
				dropTargetIndex + 1
			);

			const newChildren = children.slice(0, children.length);
			newChildren.splice(
				draggedItemIndex,
				shiftedItems.length,
				...shiftedItems
			);
			newChildren[dropTargetIndex] = children[draggedItemIndex];

			setChildren(newChildren);
		} else {
			const shiftedItems = children.slice(dropTargetIndex, draggedItemIndex);

			const newChildren = children.slice(0, children.length);
			newChildren.splice(
				dropTargetIndex + 1,
				shiftedItems.length,
				...shiftedItems
			);
			newChildren[dropTargetIndex] = children[draggedItemIndex];

			setChildren(newChildren);
		}
	}

	const lastReorder = {
		draggedItemId: -1,
		dropTargetId: -1,
		draggedItemIndex: -1,
		dropTargetIndex: -1,
	};

	function isDuplicateReorder(
		draggedItemId,
		dropTargetId,
		draggedItemIndex,
		dropTargetIndex
	) {
		let ans = false;

		if (
			lastReorder.draggedItemId == draggedItemId ||
			lastReorder.dropTargetId == dropTargetId ||
			lastReorder.draggedItemIndex == draggedItemIndex ||
			lastReorder.dropTargetIndex == dropTargetIndex
		) {
			ans = true;
		}

		lastReorder.draggedItemId = draggedItemId;
		lastReorder.dropTargetId = dropTargetId;
		lastReorder.draggedItemIndex = draggedItemIndex;
		lastReorder.dropTargetIndex = dropTargetIndex;

		return ans;
	}

	useEffect(() => {
		let c = [];
		if (!Array.isArray(props.children)) {
			c.push(props.children);
		} else {
			c = props.children;
		}
		c = c.map((child, index) =>
			React.cloneElement(child, {
				key: index,
				reorderableId: index++,
			})
		);
		setChildren(c);
	}, []);

	return (
		<div className={props.className}>
			<SortableListContext.Provider value={reorderItems}>
				{children}
			</SortableListContext.Provider>
		</div>
	);
}
