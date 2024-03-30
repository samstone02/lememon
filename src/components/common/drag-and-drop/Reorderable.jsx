import { useContext, useRef } from "react";
import { ReorderableContext } from "./Context"

/**
 * @summary A wrapper component which creates a draggable and reorderable element.
 * @param channel (string) Defines which reorderables can be placed into which containers. 
 */
export default function Reorderable(props) {
    const ctx = useContext(ReorderableContext)

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
    
        ctx(draggedItemId, dropTargetId)
    }

    return (
        <div
            className="reorderable"
            draggable
            onDragStart={handleOnDragStart}
            onDragOver={handleOnDragOver}
            onDrop={handleOnDrop}
        >
            {props.children}
        </div>
    )
}