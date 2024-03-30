import React, { useContext, useEffect, useRef, useState } from "react"
import { ReorderableContext } from "./Context"

/**
 * @summary Allows children `Reorderable` to be moved around on mouse drag and drop.
 * @param channel (string) Defines which reorderables can be placed into which containers. 
 */
export default function ReorderableContainer(props) {
    const [children, setChildren] = useState([])

    let reorderItems = (draggedItemId, dropTargetId) => {
        const draggedItemIndex = children.findIndex(child => child.props.reorderableId == draggedItemId)
        const dropTargetIndex = children.findIndex(child => child.props.reorderableId == dropTargetId)

        // get items between the dragged item and dropp target item (including the drop target)
        console.log(draggedItemIndex)
        console.log(dropTargetIndex)

        const shiftDown = draggedItemIndex < dropTargetIndex

        if (shiftDown) {
            const shiftedItems = children.slice(draggedItemIndex + 1, dropTargetIndex + 1)

            const newChildren = children.slice(0, children.length);
            newChildren.splice(draggedItemIndex, shiftedItems.length, ...shiftedItems)
            newChildren[dropTargetIndex] = children[draggedItemIndex]

            setChildren(newChildren)
        }
        else {
            const shiftedItems = children.slice(dropTargetIndex, draggedItemIndex)

            const newChildren = children.slice(0, children.length);
            newChildren.splice(dropTargetIndex + 1, shiftedItems.length, ...shiftedItems)
            newChildren[dropTargetIndex] = children[draggedItemIndex]

            setChildren(newChildren)
        }
    }

    useEffect(() => {
        setChildren(props.children.map((child, index) => {
            return React.cloneElement(
                child, {
                    key: index++,
                    reorderableId: index
                }
    )}))}, [])

    return (
        <div>
            <ReorderableContext.Provider value={reorderItems}>
                {children}
            </ReorderableContext.Provider>
        </div>
    )
}