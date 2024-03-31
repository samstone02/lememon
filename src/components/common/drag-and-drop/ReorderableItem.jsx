import { BiDotsVertical } from "react-icons/bi";
import { BiSort } from "react-icons/bi";
import React, { useContext } from "react";
import { ReorderableContext } from "./ReorderableContext"

import '$/styles/reorderable.css'

/**
 * @summary A wrapper component which creates a draggable and reorderable element.
 * @param channel (string) Defines which reorderables can be placed into which containers. 
 */
export default function ReorderableItem(props) {
    const reorderItems = useContext(ReorderableContext)

    function handleOnDragStart(event) {
        console.debug(event.target)
        console.debug(props.reorderableId)

        event.dataTransfer.setData("dragged-item-reorderable-id", props.reorderableId)
    }

    function handleOnDragEnter(event) {
        // preventDefault call is required to identify a valid drop target
        // https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#specifying_drop_targets
        event.preventDefault()

        setTimeout(() => {
            reorderItemsHelper(event)
        }, 500)
    }

    function handleOnDrop(event) {
        reorderItemsHelper(event)
    }

    function reorderItemsHelper(event) {
        const draggedItemId = event.dataTransfer.getData('dragged-item-reorderable-id')
        const dropTargetId = props.reorderableId
        reorderItems(draggedItemId, dropTargetId)
    }

    return (
        <div
            className={`${props.className} reorderable-item`}
            onDragEnter={handleOnDragEnter}
            onDrop={handleOnDrop}
        >
            {props.children}
            <div className="flex">
                <div
                    draggable
                    onDragStart={handleOnDragStart}
                >
                    <BiSort/>
                </div>
                <div>
                    <BiDotsVertical/>
                </div>
            </div>
        </div>
    )
}