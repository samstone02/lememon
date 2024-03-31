import React, { useContext } from "react";
import { ReorderableContext } from "./ReorderableContext"

/**
 * @summary A wrapper component which creates a draggable and reorderable element.
 * @param channel (string) Defines which reorderables can be placed into which containers. 
 */
export default function ReorderableItem(props) {
    const reorderItems = useContext(ReorderableContext)

    function handleOnDragStart(event) {
        event.dataTransfer.setData("dragged-item-reorderable-id", props.reorderableId)
    }

    function handleOnDragOver(event) {
        // preventDefault call is required to identify a valid drop target
        // https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#specifying_drop_targets
        event.preventDefault();
    }

    function handleOnDrop(event) {
        const draggedItemId = event.dataTransfer.getData('dragged-item-reorderable-id')
        const dropTargetId = props.reorderableId
    
        reorderItems(draggedItemId, dropTargetId)
    }

    return (
        <div
            className="reorderable-item"
            draggable
            onDragStart={handleOnDragStart}
            onDragOver={handleOnDragOver}
            onDrop={handleOnDrop}
        >
            {props.children}
            {/* <div>
                Drag Handle
            </div> */}
        </div>
    )
}