import { ChevronLeft, Grip } from "lucide-react";
import React, { useContext, useState } from "react";
import { ReorderableContext } from "./ReorderableContext"

import '$/styles/reorderable.css'

/**
 * @summary A wrapper component which creates a draggable and reorderable element.
 * @param channel (string) Defines which reorderables can be placed into which containers. 
 */
export default function ReorderableItem(props) {
    const reorderItems = useContext(ReorderableContext)

    console.log("item")

    function handleOnDragStart(event) {
        event.dataTransfer.setData("dragged-item-reorderable-id", props.reorderableId)
    }

    function handleOnDragEnter(event) {
        // preventDefault call is required to identify a valid drop target
        // https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#specifying_drop_targets
        event.preventDefault()

        if (event.dataTransfer.getData('dragged-item-reorderable-id') == props.reorderableId) {
            return
        }

        setTimeout(() => {
            reorderItemsHelper(event)
        }, 500)
    }

    function handleOnDragOver(event) {
        // preventDefault call is required to identify a valid drop target
        // https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#specifying_drop_targets
        event.preventDefault()
    }

    function handleOnDrop(event) {
        if (event.dataTransfer.getData('dragged-item-reorderable-id') == props.reorderableId) {
            return
        }

        reorderItemsHelper(event)
    }

    function reorderItemsHelper(event) {
        const draggedItemId = event.dataTransfer.getData('dragged-item-reorderable-id')
        const dropTargetId = props.reorderableId
        reorderItems(draggedItemId, dropTargetId)
    }

    // function handleOnMouseEnter(event) {
    //     setOptionsButtonVisibility("visible")
    // }

    // function handleOnMouseExit(event) {
    //     setOptionsButtonVisibility("invisible")
    // }

    return (
        <div
            className={`${props.className} flex justify-between items-start`}
            onDragEnter={handleOnDragEnter}
            onDragOver={handleOnDragOver}
            onDrop={handleOnDrop}
            // onMouseEnter={handleOnMouseEnter}
            // onMouseLeave={handleOnMouseExit}
        >
            {props.children}
            <div className="shrink-0 flex">
                <div
                    // className={optionsButtonVisibility}
                >
                    <ChevronLeft size={24} strokeWidth={2} absoluteStrokeWidth={true} />
                </div>
                <div
                    draggable
                    onDragStart={handleOnDragStart}
                >
                    <Grip size={24} strokeWidth={2} absoluteStrokeWidth={true} />
                </div>
            </div>
        </div>
    )
}